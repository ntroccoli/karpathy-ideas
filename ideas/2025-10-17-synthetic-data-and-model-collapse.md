---
title: Model outputs are silently collapsed, so synthetic data needs entropy
date: 2025-10-17
source: talk
url: https://www.dwarkesh.com/p/andrej-karpathy
also: []
themes: [research-and-training, llm-psychology]
summary: Each sample from a model looks fine but the set is narrow; training on your own output makes models worse, so seek outside variety.
status: current
superseded_by:
anthropic: false
---

# Model outputs are silently collapsed, so synthetic data needs entropy

Karpathy asks why we cannot let a model think about a book and train on that. Any one sample
looks good. But ask ten times and the answers are almost the same, because the model covers only a
small part of the space of possible thoughts. Ask a chatbot for a joke and it knows about three.
Train on enough of this output and quality falls. People collapse too: children say surprising
things, adults repeat themselves. His fix for people is to seek entropy, for example by talking to
others. For models it is a research problem. He also says reading a book should be a set of
prompts for you to think with, which LLM pre-training does not do.

## In his words

> "They’re silently collapsed."
> — Andrej Karpathy, 2025-10-17

## Apply

- Do not train or fine-tune on a pile of your own model's output without checking its variety.
- For brainstorming, make the model produce differently shaped answers (other personas, other
  constraints) and compare them. Do not ask ten times with one prompt.
- Bring human or external input into agent notes, so they do not become a loop of the same views.

## Context

- Dwarkesh Patel interview, 2025-10-17. The reading-as-prompts point links to his later
  interest in LLM-written knowledge bases (see [Outsource thinking, not understanding](2026-03-31-understanding-is-the-bottleneck.md)).
