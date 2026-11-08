---
title: Make memory and compaction tools that RL trains
date: 2026-03-05
source: x
url: https://x.com/karpathy/status/2029696850366971921
also: []
themes: [research-and-training, context-and-prompting]
summary: Long-term memory may need less than new weights at first: treat memory and compaction as tools and train them with RL.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Make memory and compaction tools that RL trains

Karpathy guesses that the current paradigm can go far on long-term memory. Today's compaction and
memory features are early and bolted on. They can become "memory operations" that the model calls
as tools, and reinforcement learning can optimise them like any other tool. He doubts that this
is the full answer. People seem to update their weights, he suspects mostly during sleep. So
methods that change weights are worth researching, but the details are unclear and they sit
outside today's production stack.

## In his words

> "current compaction and memory implementations are crappy, first, early examples"
> — Andrej Karpathy, 2026-03-05

## Apply

- Expose memory as explicit tool calls (write, search, summarise, forget) instead of hidden
  prompt glue, so you can log and evaluate each call.
- Test your agent's compaction by what it loses: replay long sessions and check that key facts
  survive.
- Treat weight updates (finetuning on a wiki or logs) as a later, second layer, not the first
  step.

## Context

- A reply to a continual-learning post by Awni Hannun. See also
  [memory that distracts](2026-03-25-memory-personalization-overreach.md) and
  [LLM knowledge bases](2026-04-02-llm-knowledge-bases.md).
