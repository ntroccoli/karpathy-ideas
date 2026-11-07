---
title: The cost to train a GPT-2 level model falls about 2.5X per year
date: 2026-01-31
source: x
url: https://x.com/karpathy/status/2017703360393318587
also: [https://x.com/karpathy/status/2018804068874064198, https://github.com/karpathy/nanochat/discussions/481]
themes: [research-and-training, ai-progress]
summary: GPT-2 cost about 43,000 dollars in 2019; nanochat matches it in about 3 hours for about 73 dollars, helped by many small stacked gains.
status: current
superseded_by:
anthropic: false
---

# The cost to train a GPT-2 level model falls about 2.5X per year

Karpathy reproduced GPT-2 level quality (CORE score) in nanochat on one 8xH100 node in about 3 hours for about 73 dollars. OpenAI paid about 43,000 dollars in 2019. That is a 600X drop in 7 years, about 2.5X per year, and he thinks it is an underestimate. Big gains came from Flash Attention 3, the Muon optimizer, gated residual and skip connections, and value embeddings, plus many small changes. He added a "time to GPT-2" leaderboard. Days later fp8 cut the time to 2.91 hours, with a lesson: fp8 gave much less than the 2X on paper because of overhead.

## In his words

> "the cost to train GPT-2 is falling approximately 2.5X every year"
> — Andrej Karpathy, 2026-01-31

## Apply

- Fix a target quality (a benchmark score), then measure time or cost to reach it. Use that as your tracking metric.
- Measure real speedups end to end. Low precision may be slower when matrices are small.
- Add changes one at a time and keep only those that improve the metric.

## Context

- Related: [Train a family of models controlled by one compute dial](2026-01-07-model-family-with-one-compute-dial.md).
- Spot instance prices put the same run near 20 dollars, he wrote on 2026-02-03.
