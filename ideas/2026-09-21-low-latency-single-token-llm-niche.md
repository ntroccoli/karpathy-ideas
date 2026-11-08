---
title: Fast, no-thinking LLMs fill an under-served niche
date: 2026-09-21
source: x
url: https://x.com/karpathy/status/2102124533729955960
also: []
themes: [ai-progress, agent-native-software]
summary: A zero-shot classifier with frontier-level knowledge is a point on the LLM trade-off curve that the race for raw intelligence left empty.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Fast, no-thinking LLMs fill an under-served niche

A product was described as a zero-shot classifier built on a strong LLM. Karpathy explains its
success this way: it sits at one point of the Pareto curve of LLM trade-offs. At that point there
is no thinking, one output token and low latency, with "good enough" intelligence. Demand there
was large but hidden, and builders ignored it because the whole field raced toward higher
intelligence. The practical view: the best model for a job is not always the smartest one.

## Apply

- For labeling, routing and filtering, test a small, fast model with a one-token answer first.
- Turn thinking off when the task is a lookup or a classification.
- Compare cost, latency and accuracy on your own data, not on public benchmarks.

## Context

- Reply to a post about rescuing an old ML idea with LLMs.
- Our reading: the same logic supports using cheap models for bulk work, as in
  [the HackerTube project](2026-11-01-hackertube-weekend-app.md).
