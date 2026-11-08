---
title: Do not split train and test with positive and negative seeds
date: 2025-12-09
source: x
url: https://x.com/karpathy/status/1998236299862659485
also: [https://x.com/karpathy/status/1998240551964193148]
themes: [research-and-training, verification]
summary: Python's random.seed(3) and random.seed(-3) give the same stream, and the docs promise only that equal seeds match, so never separate datasets by seed sign.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Do not split train and test with positive and negative seeds

Karpathy found a bug in nanochat. He had used the sign of the seed as a clever way to get different random streams for train and test. In Python, `random.seed(3)` and `random.seed(-3)` give the same generator, because the code takes the absolute value of an integer seed. The docs say only that the same seed gives the same sequence. They do not promise that different seeds give different sequences. He also argues that dropping the sign bit was a mistake, since the algorithm has many state bits that could use it. The bug was small and showed up only in one evaluation, but it made train equal to test.

## In his words

> "no guarantee is made that different seeds produce different sequences"
> — Andrej Karpathy, 2025-12-09

## Apply

- Make train and test splits from a fixed list of ids or a hash, not from a seed trick.
- Add a test that proves your two random streams differ, and that the sets do not overlap.
- Do not rely on behaviour the docs do not state; read the contract.

## Context

- Post of 2025-12-09. A contributor on GitHub found the bug.
- Related: [Give agents success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
