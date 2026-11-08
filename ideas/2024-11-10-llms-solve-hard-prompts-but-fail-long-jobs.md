---
title: Hard closed problems are easy; long autonomous jobs are hard
date: 2024-11-10
source: x
url: https://x.com/karpathy/status/1855659091877937385
also: []
themes: [ai-progress, verification]
summary: LLMs solve hard problems served neatly in a prompt but struggle with long, coherent, autonomous work, and we need evals for that.
status: current
superseded_by:
anthropic: false
kind: view
---

# Hard closed problems are easy; long autonomous jobs are hard

Karpathy applies Moravec's paradox to LLM evals. Models solve hard, closed problems that arrive neatly in a prompt. They struggle with long, autonomous, coherent sequences, so you would not hire them for menial jobs. He asks for evals of such "menial job" work: long context, coherence, autonomy and common sense.

## Apply

- Give agents closed, well-specified chunks of work.
- Handle long-horizon coordination yourself, or use tight checkpoints and a state file.
- Test a new agent on a long task from your own work, not only on puzzles.

## Context

- Posted 2024-11-10. Related: [the junior intern test](2024-12-14-would-you-hire-it-as-a-junior-intern.md), which sets a week-sized task as the bar.
