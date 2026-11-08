---
title: Give a model an identity with synthetic conversations, and make them diverse
date: 2025-10-21
source: x
url: https://x.com/karpathy/status/1980665134415802554
also: [https://x.com/karpathy/status/1980508380860150038, https://x.com/karpathy/status/1980458434559652036]
themes: [research-and-training, llm-psychology]
summary: A model does not know what it is by default; have a bigger model write varied conversations about it and mix them into midtraining and finetuning.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Give a model an identity with synthetic conversations, and make them diverse

By default a language model has no personality and no knowledge of its own abilities. Karpathy says it is not an animal-like entity, so it does not know what it is, who made it or what it can do. All of that must be added on purpose. His recipe for nanochat: describe in words what the conversations should look like, ask a bigger model to write about 1,000 multi-turn chats, then mix them into midtraining and finetuning. The hard part is diversity. Even at high temperature, a model writes near-identical samples. His script adds variety with lists of opening messages and topics that it samples explicitly, and with few-shot examples in the prompt. He also used it to make the model call him "King".

## In his words

> "LLMs have no clue of their identity or of their capabilities by default"
> — Andrej Karpathy, 2025-10-21

## Apply

- Write down the facts the model must know about itself: name, maker, size, limits, languages.
- Generate conversations with a stronger model, from a prompt that contains those facts.
- Force variety: sample topics and first messages from explicit lists instead of relying on temperature.
- Mix the data into a late training stage and test with questions that were not in the data.

## Context

- Posts of 2025-10-21 on the nanochat project, with a written guide in the repo.
- Related: [Model outputs are silently collapsed, so synthetic data needs entropy](2025-10-17-synthetic-data-and-model-collapse.md) and [LLMs are ghosts, not animals](2025-10-01-llms-are-ghosts-not-animals.md).
- His view that models have no built-in sense of self: [Model self-knowledge comes from text about models](2026-07-21-model-self-awareness-from-pretraining.md).
