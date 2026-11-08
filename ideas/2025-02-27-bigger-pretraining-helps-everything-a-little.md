---
title: Bigger pretraining improves everything a little, and is hard to point to
date: 2025-02-27
source: x
url: https://x.com/karpathy/status/1895213020982472863
also: [https://x.com/karpathy/status/1895337579589079434, https://x.com/karpathy/status/1895345244520189966]
themes: [ai-progress, research-and-training]
summary: A model with 10X more pretraining compute gets better in diffuse ways: knowledge, nuance, humor; test it on non-reasoning tasks, and do not trust a small poll.
status: current
superseded_by:
anthropic: false
kind: view
---

# Bigger pretraining improves everything a little, and is hard to point to

Karpathy used the release of GPT-4.5 to read the slope of gains from scaling pretraining alone.
Each 0.5 step in the version number is roughly 10X pretraining compute. GPT-3.5 was where chat
became a product. GPT-4 was better in a subtle way: word choice, nuance, analogies, rare
knowledge and humor all improved by a little, and slam-dunk examples were hard to find. He saw
the same pattern in GPT-4.5.

He stressed it had no reasoning training, so it does not move math and code. Its gains should
show on tasks that depend on knowledge, creativity and humor. To test that he ran five creative
prompts as a public poll. The crowd preferred the older model in four of five, which he found
surprising; he guessed at taste, a small sample, or weak examples, and waited for larger tests.

## In his words

> "Each 0.5 in the version is roughly 10X pretraining compute."
> — Andrej Karpathy, 2025-02-27

## Apply

- Compare a new large model with the older one on creative and open tasks, not only on math or code.
- Judge with careful side-by-side reading; a quick poll mixes taste levels and small samples.
- Look for the odd phrases, tropes and formulaic parts in the older answer, which a careful reader catches.

## Context

- He also noted a mistake in GPT-4.5's text: it joked that an old model is slow like dial-up, but older models are faster.
- On the evaluation problem that followed, see [Public benchmarks are gameable, so keep your own evals](2025-11-18-go-talk-to-the-model-private-evals.md).
