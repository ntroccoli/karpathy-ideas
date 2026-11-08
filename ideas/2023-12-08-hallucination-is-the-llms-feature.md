---
title: Hallucination is the LLM's main feature, so the system must check it
date: 2023-12-08
source: x
url: https://x.com/karpathy/status/1733299213503787018
also: [https://x.com/karpathy/status/1980033964757946398]
themes: [llm-psychology, verification]
summary: An LLM is a dream machine steered by prompts, so the system around it must check its output with search, tools and verification.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Hallucination is the LLM's main feature, so the system must check it

In December 2023 Karpathy called LLMs dream machines that are directed by prompts. A search engine dreams 0 percent of the time, which gives it a creativity problem. An LLM dreams 100 percent of the time, which gives it a hallucination problem. So the assistant system should reduce the risk with retrieval, comparing several samples, reflection, verification chains and tool use. This view still helps when you design checks around an agent.

## In his words

> "Hallucination is not a bug, it is LLM's greatest feature."
> — Andrej Karpathy, 2023-12-08

## Apply

- Ground the agent in real files and docs, and ask it to cite the file and line.
- For a risky claim, ask the same question several times and check where the answers differ.
- Let tools check facts (run the code, query the data) before you trust a statement.

## Context

- Posted 2023-12-08. Kept because the advice still applies.
- Related: [what you can verify](2025-11-17-software-2-automates-what-you-can-verify.md).
- He says he probably coined "hallucinate" for this in his 2015 RNN post. Hinton's "confabulate" is closer to human psychology but too tied to facts, so he prefers the broader word.
