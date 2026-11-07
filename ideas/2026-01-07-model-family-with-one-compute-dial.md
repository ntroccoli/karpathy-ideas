---
title: Train a family of models controlled by one compute dial
date: 2026-01-07
source: x
url: https://x.com/karpathy/status/2009037707918626874
also: [https://github.com/karpathy/nanochat/discussions/420]
themes: [research-and-training]
summary: Optimize for a series of models along one compute axis, fit scaling laws on small runs, then trust the extrapolation for the big run.
status: current
superseded_by:
anthropic: false
---

# Train a family of models controlled by one compute dial

Karpathy argues that you should not tune for one model. You tune a family of models controlled by one dial, the compute you spend, so results improve steadily as you turn it. This lets you do real scaling-law science and gives confidence that a big run will behave as extrapolated. In nanochat he fixed FLOP budgets, swept model sizes and found a tokens-to-parameters ratio of about 8, against about 20 in Chinchilla. A miniseries from d10 to d20 cost about 100 dollars. He compared it with GPT-2 and GPT-3 through the CORE score, since validation loss is not comparable across setups.

## In his words

> "controlled by a single dial (the compute you wish to spend)"
> — Andrej Karpathy, 2026-01-07

## Apply

- Fix a FLOP budget, train several sizes, and find the size with the lowest loss at that budget.
- Repeat at three or more budgets. Fit a line for optimal size and tokens against compute.
- Use one objective score (such as CORE) when you compare with models that use other data.
- Run the full recipe in his repo with `scaling_laws.sh` and `miniseries.sh`.

## Context

- Source post links nanochat discussion 420. See [GPT-2 level training now costs under 100 dollars](2026-01-31-gpt2-training-cost-falling.md).
