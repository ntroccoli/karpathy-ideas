---
title: Filtering synthetic data is crude reinforcement learning
date: 2025-01-27
source: x
url: https://x.com/karpathy/status/1883941452738355376
also: [https://x.com/karpathy/status/1884317937185743206]
themes: [research-and-training]
summary: Sampling answers and training on the best is trial-and-error learning in miniature; imitation teaches what humans know, trial and error finds what they do not.
status: current
superseded_by:
anthropic: false
kind: view
---

# Filtering synthetic data is crude reinforcement learning

Karpathy describes two kinds of learning, in children and in networks. Imitation (pretraining,
supervised finetuning) copies a source. Trial and error (reinforcement learning) tries things
and learns from the result. He says almost every striking deep learning result comes from the
second kind, because the model can find things a human labeller would not know to write down.

He then links synthetic data and RL. In RL the "trial" is the model generating data and the
"error" is the reward. If you generate data and keep only what passes a filter, your filter is a
simple 0-or-1 reward. In a reply he gave the core loop: sample many answers, keep the best,
train on it, repeat. Fancier maths, such as smooth advantages and trust regions, refines this.
He also noted that data is partly downstream of compute, because you can spend compute to make it.

## In his words

> "your filter is straight up equivalent to a 0-1 advantage function"
> — Andrej Karpathy, 2025-01-27

## Apply

- To improve a model on a task you can score, sample several answers, keep the highest-scoring
  one, and finetune on it. Then repeat.
- Keep a reward or check you trust; the loop copies whatever the check rewards.
- Use imitation data for what humans already know, and reward-based training for strategies
  you cannot write down.

## Context

- A reaction to DeepSeek-R1, a week after its release. It builds on [RL gives thinking models strategies you cannot write by hand](2025-01-28-cognitive-strategies-cannot-be-hand-programmed.md).
- He added that RL is powerful but RLHF is not; see [An LLM judge gets gamed when you optimise against it](2024-08-07-rlhf-is-just-barely-rl.md).
