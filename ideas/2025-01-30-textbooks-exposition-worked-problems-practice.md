---
title: LLMs need the practice problems of a textbook
date: 2025-01-30
source: x
url: https://x.com/karpathy/status/1885026028428681698
also: [https://x.com/karpathy/status/1857584163140030710, https://x.com/karpathy/status/1961128638725923119, https://x.com/karpathy/status/1892261841528553960, https://x.com/karpathy/status/1960805995313291488]
themes: [learning-and-education, research-and-training]
summary: LLMs got plenty of exposition and worked examples; practice problems with checkable answers are the new frontier, and they are RL.
status: current
superseded_by:
anthropic: false
kind: practice
---

# LLMs need the practice problems of a textbook

Karpathy notes that a textbook has three kinds of content. Exposition matches pretraining. Worked problems match supervised finetuning. Practice problems with answers match RL. LLMs have plenty of the first two. The third is the nascent frontier. Later posts extend this. In November 2024 he said exercise pages gathered at scale now move billions of weights, so textbooks are partly written for LLMs. In August 2025 he proposed turning each textbook into LLM-first material: markdown exposition, worked problems as examples, practice problems as RL environments with answer keys, and problem generators.

## In his words

> "They have to read, and they have to practice."
> — Andrej Karpathy, 2025-01-30

## Apply

- When you teach an agent a skill, give worked examples and practice tasks with checkable answers, not only explanations.
- Turn your docs into markdown with runnable examples that an agent can query.
- Use a problem generator to make many test cases for the same skill.
- Keep practice problems at the right level: not trivial, not impossible. If every problem is too hard, reinforcement learning gets no signal (his reply of 2025-02-19).
- Turn the practice problems of a textbook into RL-style environments, each checked against its answer key (his reply of 2025-08-27).

## Context

- Posted 2025-01-30; extended on 2024-11-15 (earlier) and 2025-08-28.
- Related: [RL environments are the new data](2025-08-27-rl-environments-are-the-new-data.md).
