---
title: Read a few cases in depth, not only dashboards
date: 2025-07-14
source: x
url: https://x.com/karpathy/status/1944885371957031005
also: []
themes: [verification, research-and-training]
summary: Close study of a few random cases teaches more than aggregate statistics over all cases; both help, but the aggregate view is overused.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Read a few cases in depth, not only dashboards

Karpathy says he learns more from a detailed look at a few random examples than from dashboards
of statistics over every example. Both views are useful. The aggregate view, he says, is far
more common than it should be. For work with LLMs this means a score on an eval set tells you
how much, while a close read of single outputs tells you why. Our reading: an agent run is one
such case, so its full transcript is worth reading even when the pass rate looks fine.

## In his words

> "in-depth analysis of few random cases over dashboards of aggregate statistics"
> — Andrej Karpathy, 2025-07-14

## Apply

- After each eval run, pick five cases at random and read the full input, output and trace.
- Sample at random; do not pick only failures or only your favourite examples.
- Write down what each case taught you before you look at the average again.

## Context

- Posted 2025-07-14 with no thread. Short opinion; the Apply steps are our own use of it.
