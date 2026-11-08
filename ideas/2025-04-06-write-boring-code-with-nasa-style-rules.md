---
title: Write boring code with NASA-style rules
date: 2025-04-06
source: x
url: https://x.com/karpathy/status/1909007524885672262
also: [https://x.com/karpathy/status/1909008479873802430, https://x.com/karpathy/status/1908989172452647139]
themes: [agentic-coding]
summary: To make C safer, remove clever features: ban anything exotic and keep every line to one plain action, as NASA's rules for C code do.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Write boring code with NASA-style rules

Asked for a better language than C, he said C gives too much rope. He would move toward an ideal by subtracting features. His best pointer is the NASA requirements for C code. They remove what is too exotic, too clever or too fancy, and each line does one thing. His test for a banned feature: it lets you impress friends with esoteric knowledge, or it makes a reader ask what a snippet will print.

## In his words

> "Every line does one single thing."
> — Andrej Karpathy, 2025-04-06

## Apply

- Write a short style rule for your code base: no tricks, no code that needs a puzzle to read.
- Review code with one question: can a new reader say what this line does without running it?
- Our reading: give the same rule to coding agents in your project instructions, since plain code is also easier to review.

## Context

- April 2025, in a thread on C and safer subsets. He did not name a specific NASA document. Our reading: the rule is about readability, not only memory safety.
- Related: [understanding is the bottleneck](2026-03-31-understanding-is-the-bottleneck.md).
