---
title: Making a model know your own data is still research; use retrieval for now
date: 2025-10-13
source: x
url: https://x.com/karpathy/status/1977760627730051214
also: []
themes: [research-and-training, knowledge-management]
summary: Training a small model on your notes gives slop; a real personal model needs synthetic rewrites and a big finetune, so retrieval is the practical choice.
status: current
superseded_by:
anthropic: false
kind: view
---

# Making a model know your own data is still research; use retrieval for now

A reader asked whether nanochat could be trained on personal notes. Karpathy said no. Micro models are like very young children: they lack the raw intelligence of larger ones. Training one on your writing gives amusing parroting in your style, but it is slop. A better recipe, which he calls research and not obvious: take your raw data, add heavy synthetic rewrites, finetune a strong open model on it, and mix in pretraining data so the model keeps its general skill. The best plan that is not research is to give your writing to a retrieval tool. Your data reaches the context window in chunks but does not change the weights, so the model does not truly know you.

## Context

- Reply under the nanochat release, 2025-10-13.
- Related: [Model outputs are silently collapsed, so synthetic data needs entropy](2025-10-17-synthetic-data-and-model-collapse.md) and [Explicit personal memory as files](2026-04-04-explicit-personal-memory-as-files.md).
