---
title: Learn the physical lens of computing
date: 2025-05-06
source: x
url: https://x.com/karpathy/status/1919647115099451892
also: [https://x.com/karpathy/status/1927506788527591853]
themes: [learning-and-education, research-and-training]
summary: Study how computers use energy, data locality, parallelism and architecture, not only computability and complexity; the physical lens gives power.
status: current
superseded_by:
anthropic: false
kind: view
---

# Learn the physical lens of computing

He called it a major mistake of his undergraduate years that he leaned too far on the mathematical view of computing: computability, decidability and asymptotic complexity. He gave too little time to the physical view: the energy and heat of changing state, data locality, parallelism and computer architecture. The mathematical view is interesting. The physical view is where the power is. Our reading: this matters most for anyone who trains or serves large models, where memory movement and parallel hardware set the speed.

## In his words

> "The former is interesting; The latter bestows power."
> — Andrej Karpathy, 2025-05-06

## Apply

Our reading: all steps below go further than the idea itself.

- When you plan study time, add hardware topics: memory hierarchy, cache, GPU parallelism, and the cost of moving data.
- Before you optimise code, measure where data moves, not only how many operations run.

## Context

- Posted 2025-05-06.
- In May 2025 he praised a project that ran a whole Llama 1B forward pass, at batch size one, in a single CUDA kernel. Each boundary between kernels forces a sync, so one kernel removes those gaps; he called it the only way to plan compute and memory at their best.
