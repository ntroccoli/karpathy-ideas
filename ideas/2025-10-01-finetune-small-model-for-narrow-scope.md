---
title: Finetune a small model to narrow the scope of one pipeline step
date: 2025-10-01
source: x
url: https://x.com/karpathy/status/1973468610917179630
also: [https://x.com/karpathy/status/1973474834949759107]
themes: [research-and-training, agent-native-software]
summary: Finetuning is less about style and more about narrowing scope; a small tuned model can beat a long few-shot prompt on one step of an LLM pipeline.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Finetune a small model to narrow the scope of one pipeline step

Karpathy welcomed Tinker, an API that runs the heavy parts of post-training (infrastructure and distributed training) and leaves data, loss and algorithm to the user. He says the field still has to learn when finetuning beats prompting a giant model. Early signs say finetuning does not mainly change style. It narrows scope, most of all when you have many training examples. A spam filter is the extreme case. Production LLM apps are more and more pipelines of models in graphs. Some steps work as prompts. Many may work better, and faster, as a finetune of a small model. In a reply he added that using a closed model API feels uneasy when you have no recourse.

## Apply

- List the steps of your LLM pipeline. Mark each step that has one narrow job and many labelled examples.
- For each marked step, compare a long few-shot prompt on a big model with a finetuned small model. Measure quality, latency and cost.
- Keep the prompt on steps that need broad knowledge or change often.
- Keep your training data and a copy of an open-weights base model, so you are not tied to one vendor.

## Context

- Posted 2025-10-01 as a reaction to the Tinker launch by Thinking Machines.
- Related: [Software 3.0 means programming computers in English](2025-06-17-software-3-0-english-as-programs.md) and [Context engineering](2025-06-25-context-engineering.md).
