---
title: Reinforcement learning sucks supervision through a straw
date: 2025-10-17
source: talk
url: https://www.dwarkesh.com/p/andrej-karpathy
also: []
themes: [research-and-training]
summary: Outcome-only RL rewards every step of a lucky run equally; it works better than imitation but is noisy and needs new ideas such as reflection.
status: current
superseded_by:
anthropic: false
kind: view
---

# Reinforcement learning sucks supervision through a straw

Karpathy says reinforcement learning is much worse than most people think, and that what came
before, imitating humans, is worse still. In RL on a math problem, the model tries many
solutions. It then marks the ones with the right answer and boosts every token in them, even the
wrong turns. One final number is spread across a whole minute of work. A person would not learn
this way: they would review the attempt and decide which parts were good. LLMs have no such
step. Process supervision would help, but partial credit is hard to compute. He expects the field
needs three to five more big algorithm ideas.

## In his words

> "...you're sucking supervision through a straw."
> — Andrej Karpathy, 2025-10-17

## Apply

- When you design an agent loop, give feedback at several points (tests per step), not only a
  final pass or fail.
- Make agents write a short review of what worked after a run, and keep that review in a notes
  file for the next run.
- Expect RL-trained models to be strong where an answer can be checked, and weaker elsewhere.

## Context

- Dwarkesh Patel interview, 2025-10-17.
- Related: [An LLM judge gets gamed](2024-08-07-rlhf-is-just-barely-rl.md) and
  [Synthetic data collapses](2025-10-17-synthetic-data-and-model-collapse.md).
