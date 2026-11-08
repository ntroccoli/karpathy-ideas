---
title: Model self-knowledge comes from text about models
date: 2026-07-21
source: x
url: https://x.com/karpathy/status/2079645572047548608
also: []
themes: [llm-psychology]
summary: Models learn about themselves from pretraining text in which people discuss them, so their self-awareness lags and is incomplete, but it grows.
status: current
superseded_by:
anthropic: false
kind: view
---

# Model self-knowledge comes from text about models

Karpathy notes that a model's picture of itself builds up from pretraining on text in which people
talk about models. The picture is late and partial. For example, models still say a task "would
take a human team six months", which describes human speed, not theirs. But it is improving: he
sees that a model now seems to understand what he means when he says he will compact its context.

## Apply

- Do not trust a model's estimate of how long a task takes. Measure it.
- Tell the model about its own situation: that you will compact, that it has a token budget, that
  it runs in a loop. Recent models use this information.

## Context

- A reply on 2026-07-21 to a post about models claiming that a task needs months of human work.
- Our reading: this fits his view that models are shaped by their training data, not by lived
  experience. See [LLMs are ghosts, not animals](2025-10-01-llms-are-ghosts-not-animals.md).
