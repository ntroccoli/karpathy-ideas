---
title: Ask the LLM to simulate experts, not to give its opinion
date: 2025-12-07
source: x
url: https://x.com/karpathy/status/1997731268969304070
also: [https://x.com/karpathy/status/1997759548543947249, https://x.com/karpathy/status/1998082007893717478, https://x.com/karpathy/status/1998245684521353664]
themes: [llm-psychology, context-and-prompting]
summary: There is no 'you' inside the model, so ask it to simulate a panel of suitable people instead of asking for its own opinion.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Ask the LLM to simulate experts, not to give its opinion

Karpathy says you should not ask a model for its own opinion on a topic. There is no "you" to ask. If you force one, the model simulates a personality implied by its finetuning data. A better prompt asks which people would be worth consulting on X, and what each of them would say. This gives you several views from the model's wide knowledge, and avoids one made-up personality.

## In his words

> "There is no 'you'."
> — Andrej Karpathy, 2025-12-07

## Apply

- For a design review, ask: which roles should review this (security, performance, UX)? Then ask each role for its critique.
- Name the experts or the roles in the prompt instead of asking for 'your opinion'.
- Compare the views and decide yourself. See [llm-council](2025-11-22-llm-council-anonymous-peer-review.md).

## Context

- Posted 2025-12-07.
- Related: [the space of intelligences](2025-11-29-llms-shaped-by-commercial-evolution.md).
- He later said he does not mean old-style prompts such as "you are an expert programmer". He thinks distinct simulated views may give council-like gains, from ensembling and from the gap between generating and judging.
