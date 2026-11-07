---
title: Public benchmarks are gameable, so keep your own evals
date: 2025-11-18
source: x
url: https://x.com/karpathy/status/1990854771058913347
also: [https://x.com/karpathy/status/1891720635363254772, https://karpathy.bearblog.dev/year-in-review-2025/, https://news.ycombinator.com/item?id=50322352]
themes: [verification, llm-psychology]
summary: Benchmarks are verifiable, so labs train toward them and scores mislead; talk to each model and test it on a private set of your own tasks.
status: current
superseded_by:
anthropic: false
---

# Public benchmarks are gameable, so keep your own evals

Reacting to a new frontier model in November 2025, Karpathy said public benchmarks are gameable
and advised people to talk to the model themselves. He expects people to build private ensembles
of evals for their own use. His 2025 review gives the reason. A benchmark is by design a verifiable
environment, so it is a target for RL with verifiable rewards and for synthetic data. Teams build
training environments next to a benchmark and grow "spikes" of skill that cover it; he calls
training on the test set a new art form. The result tops charts yet behaves oddly outside them. In
November 2026 he said benchmarks are in a very bad state and he basically does not trust them. He
now points to Epoch's Capabilities Index and its published benchmark reviews.

## In his words

> "Go talk to the model."
> — Andrej Karpathy, 2025-11-18

## Apply

- Collect 10 to 20 real prompts from your work, with notes on what a good answer looks like.
- Run them on each new model release and compare with the last run.
- Add a case whenever a model fails you in real work, and test the edges of your task, not only
  its centre.
- Keep the private set out of prompts, training data and public repos.
- When you read a public score, check how the benchmark was built and reviewed.

## Context

- X post of 2025-11-18 (in February 2025 he described a personal set of gotcha prompts in a post on
  Grok 3); his 2025 review of 2025-12-19; a Hacker News reply of 2026-11-01.
- He also suggested using a different LLM every day to stay current, which he calls riding the LLM
  cycle.
- Related: [Jagged intelligence follows verifiability](2026-03-20-jagged-intelligence-follows-verifiability.md),
  [RLHF is just barely RL](2024-08-07-rlhf-is-just-barely-rl.md) and
  [A text-only eval](2026-10-02-land-or-water-eval.md).
