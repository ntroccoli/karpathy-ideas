---
title: Models write over-defensive error handling
date: 2025-10-08
source: x
url: https://x.com/karpathy/status/1976077806443569355
also: [https://x.com/karpathy/status/1981009115523789169, https://x.com/karpathy/status/1976082963382272334]
themes: [agentic-coding]
summary: After RL, models wrap code in try/except and fallbacks, so tell the agent to let errors surface.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Models write over-defensive error handling

Karpathy jokes that models are terrified of exceptions, as if RL had taught them to fear errors above all. In a later reply (2025-10-22) he calls an over-defensive try/except block extremely dangerous and shows his own improved version. Over-defensive code hides real failures: the program keeps going with wrong data. This matches his earlier note that agents lack taste and add defensive code. Our reading: the cause may be training on tasks where a crash counts as failure.

## Apply

- Add a rule to the agent instruction file: let errors propagate; no blanket try/except; no silent fallbacks.
- In review, search diffs for broad except clauses and default values that hide failure.
- Prefer a check that fails loudly, such as an assert, to a fallback.

## Context

- Posted 2025-10-08. The follow-up reply is dated 2025-10-22.
- Related: [stitching tools by task](2025-08-24-stitch-coding-tools-by-task.md). In March 2026 he reported that agents often ignore style rules in instruction files, so enforce this with a linter or hook, not only prose.
