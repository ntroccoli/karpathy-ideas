---
title: A small cognitive core that reasons and looks facts up
date: 2025-06-27
source: x
url: https://x.com/karpathy/status/1938626382248149433
also: [https://www.dwarkesh.com/p/andrej-karpathy]
themes: [ai-progress, research-and-training]
summary: A model of about a billion to a few billion parameters could keep the reasoning skills, drop most memorised facts, look things up, and run on every device.
status: current
superseded_by:
anthropic: false
kind: view
---

# A small cognitive core that reasons and looks facts up

Karpathy sketches a "cognitive core": an always-on model of a few billion parameters on every
computer. It is multimodal, has dials for capability and reasoning, uses tools freely,
personalises with on-device LoRA, and hands hard tasks to cloud models. The gains are low
latency, private data, offline use and ownership. In his October 2025 Dwarkesh interview he gave
the research reason. Pretraining teaches both knowledge and intelligence, and the knowledge part
may hold models back: they lean on memory and struggle to leave the patterns of the internet. He
wants a model that keeps the algorithms for thinking, stores little fact, knows what it does not
know, and looks things up. He guesses a billion parameters could be enough; today's models are big
because internet data is poor.

## In his words

> "not your weights not your brain"
> — Andrej Karpathy, 2025-06-27

## Apply

- Run a small local model for cheap, private steps such as routing, classification and lint-like
  checks. Send only the hard steps to a large cloud model.
- Give a small model tools to search and read docs instead of expecting it to know facts.
- Put reference facts in context or retrieval, not in a long prompt of rules about everything.
- Keep your pipeline able to swap models.

## Context

- X post of 2025-06-27; Dwarkesh Patel interview of 2025-10-17. Both are predictions, not results.
  He tied the billion-parameter guess to a horizon of about 20 years.
- His 2025 review frames it as the "microcontroller" of LLM computing.
- Related: [Weights are hazy memory, context is working memory](2025-10-17-weights-hazy-memory-context-working-memory.md)
  and [Fast, no-thinking LLMs fill a niche](2026-09-21-low-latency-single-token-llm-niche.md).
