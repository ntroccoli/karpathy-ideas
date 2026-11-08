---
title: The ideal training data is the thinking, not the final text
date: 2024-01-20
source: x
url: https://x.com/karpathy/status/1748784260318990496
also: [https://x.com/karpathy/status/1875505195188416865]
themes: [knowledge-management, research-and-training]
summary: Models would learn most from the full sequence of thoughts and edits behind a text, not just the finished result.
status: current
superseded_by:
anthropic: false
kind: view
---

# The ideal training data is the thinking, not the final text

Karpathy says the ideal data for training an LLM is the whole sequence of internal thoughts and edits that led to a text, not the final text. We usually only keep the output. For a user, the point carries over: an agent that reads your reasoning can help better than one that sees only results.

## Apply

- Keep decision logs and working notes in the repo, so agents see why choices were made.
- Write the reasons next to each decision, not only the outcome.
- Keep failed attempts in a short 'tried and rejected' list.

## Context

- Posted 2024-01-20. Related practice: [system prompt learning](2025-05-10-system-prompt-learning.md).
- In January 2025 he guessed that the most valuable data would be screen recordings of exceptional people at work, ideally with their goals and reasoning recorded too.
