---
title: A pretrained LLM can simulate a population, not one persona
date: 2026-02-12
source: x
url: https://x.com/karpathy/status/2022041235188580788
also: []
themes: [llm-psychology]
summary: A base model is trained on many kinds of people, so it can simulate a population; the open problems are entropy, fidelity and use.
status: current
superseded_by:
anthropic: false
---

# A pretrained LLM can simulate a population, not one persona

Chat models usually have one crafted personality. Karpathy notes that the raw pretrained model is something else: a simulation engine trained on text from a very diverse population of people. He asks why we simulate one "person" when we could simulate many. He lists open questions: how to build such a simulator, how to manage its entropy, how faithful it is, how it is useful, and what appears when simulated people interact in loops. He calls this an under-explored dimension of LLMs. He is a small angel investor in Simile, which works on it.

## In his words

> "Why simulate one "person" when you could try to simulate a population?"
> — Andrej Karpathy, 2026-02-12

## Apply

- For user research or red-teaming, sample many differently framed personas, not one. Compare the spread of answers.
- Check fidelity against real survey data before you trust a simulation.
- Keep notes on the diversity of outputs, since fine-tuned models often collapse to one voice.

## Context

- Disclosure: he invested in Simile. Our reading: this is a research direction, not proof that simulations match real people.
