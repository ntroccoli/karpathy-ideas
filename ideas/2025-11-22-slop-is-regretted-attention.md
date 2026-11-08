---
title: Slop is data that does not help a world model; it is regretted attention
date: 2025-11-22
source: x
url: https://x.com/karpathy/status/1992093128170655971
also: [https://x.com/karpathy/status/1992053281900941549, https://x.com/karpathy/status/1992055246458351844, https://x.com/karpathy/status/1992093702337315095]
themes: [llm-psychology, ai-progress]
summary: He looks for a measurable definition of slop: filler that looks like information but does not help compress a world model, which readers regret attending to.
status: current
superseded_by:
anthropic: false
kind: view
---

# Slop is data that does not help a world model; it is regretted attention

Karpathy asked for a measurable definition of "slop". He feels he can judge a slop index, but he cannot yet define it. Replies offered "long low-perplexity text" (he noted that random tokens would then be the least slop) and a paper with three groups: information utility, quality and style. He felt these miss the core. His idea: slop is data without insight. It is filler that type-checks as information but is not. It is style without substance. When you attend to it or train on it, it does not help a model compress the world. A short form from a reply: slop is attention you later regret.

## In his words

> "Slop is "regretted" attention."
> — Andrej Karpathy, 2025-11-22

## Context

- Post and replies of 2025-11-22. He suggested using small series of LLMs and thinking-token budgets as ways to measure it.
- Related: [The slopacolypse of 2026](2026-01-26-slopacolypse-2026.md) and [Self-distillation: slop leaks](2026-05-01-self-distillation-slop-leaks.md).
