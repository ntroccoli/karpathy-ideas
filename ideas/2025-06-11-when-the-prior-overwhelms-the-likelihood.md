---
title: When the prior overwhelms the likelihood
date: 2025-06-11
source: x
url: https://x.com/karpathy/status/1932925671770358113
also: []
themes: [llm-psychology]
summary: A model can read what it expects instead of what is in the input, as when it answered a classic illusion question about an image that had no illusion.
status: current
superseded_by:
anthropic: false
kind: view
---

# When the prior overwhelms the likelihood

A user showed a model failing to read what a document or image really holds. In the example, the picture had one red circle and no surrounding circles. The model still recalled the well-known size illusion and answered from that memory. He described this as the prior overwhelming the likelihood: strong learned expectations beat the evidence in front of the model. This is a useful way to model one type of LLM error.

## In his words

> "It’s when the prior overwhelms the likelihood."
> — Andrej Karpathy, 2025-06-11

## Apply

- When you ask a model about a familiar-looking input, change a detail that breaks the usual pattern and check that the answer follows the change.
- Ask the model to quote or point to the exact part of the input that supports its answer.

## Context

- June 2025. Related: [LLMs are people spirits with deficits](2025-06-17-llms-are-people-spirits-with-deficits.md).
