---
title: Let the agent run experiments and keep a results log
date: 2025-12-28
source: x
url: https://x.com/karpathy/status/2005421816110862601
also: []
themes: [agentic-coding, verification]
summary: An agent can write code, run and watch training jobs and log results, but a human is still needed for design and subtle errors.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Let the agent run experiments and keep a results log

Karpathy reports that Claude implemented ideas, tested them on toy examples, launched and watched training runs, kept a running markdown file of results, profiled code and triaged pull requests. He still had to catch subtle mistakes, ideas it missed, and bloated or tightly coupled designs. So the agent does the loop work, and the human keeps the design.

## Apply

- Ask a long-running session to keep a results file with a run table and short notes.
- Review its design choices yourself, not only the numbers.
- Give it a way to check each run, such as a metric and a threshold.

## Context

- Posted 2025-12-28 about his nanochat experiments.
- Related: [success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
