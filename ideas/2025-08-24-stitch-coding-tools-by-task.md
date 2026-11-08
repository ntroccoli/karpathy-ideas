---
title: Stitch several coding tools together, by task size
date: 2025-08-24
source: x
url: https://x.com/karpathy/status/1959703967694545296
also: []
themes: [agentic-coding]
summary: In August 2025 he used tab-complete for most edits, an agent for big easy chunks and a stronger model for hard bugs, and found agents lacked taste.
status: superseded
superseded_by: 2026-01-26-programming-in-english-december-shift.md
anthropic: false
kind: practice
---

# Stitch several coding tools together, by task size

Karpathy describes a layered setup. Tab completion gives about 75 percent of his AI help. He says writing the concrete code in the right place is the highest-bandwidth way to state a task. Highlight-and-modify covers small edits. A terminal agent handles larger chunks that are easy to specify. He does not run it unattended: he presses ESC often and runs one instance, because parallel runs are hard to follow. A top reasoning model handles the hardest bugs and literature review. He finds agents lack taste: they add defensive try/catch, over-complicated abstractions, bloat and duplication. He also writes large throwaway code, such as 1,000 lines of visualization to find one bug, and deletes it.

## In his words

> "It's the code post-scarcity era"
> — Andrej Karpathy, 2025-08-24

## Apply

- When a task is hard to describe, write a stub or a comment in the right place and let the model complete it.
- Keep a cleanup pass after agent work to remove bloat and duplicated code.
- Ask for a throwaway visualizer or debug script when a bug is hard to see. Delete it later.
- Send the hardest bug to a stronger model. See [give it your hardest problems](2025-09-05-give-it-your-hardest-problems.md).

## Context

- Posted 2025-08-24. The post notes that there was no good way to keep the agent's instruction file up to date.
- Superseded as a tool mix. By December 2025 about 80% of his coding went to agents, not tab
  completion: see [Programming moved to English in December 2025](2026-01-26-programming-in-english-december-shift.md).
  The cleanup pass, throwaway debug tools and second opinions from a stronger model still apply.
- Related: [code is free](2025-12-19-code-is-free-and-ephemeral.md) and [models fear exceptions](2025-10-08-models-over-defensive-about-exceptions.md).
