---
title: Verification, not generation, is the bottleneck
date: 2025-06-04
source: x
url: https://x.com/karpathy/status/1930305209747812559
also: [https://x.com/karpathy/status/1930305870619128052, https://x.com/karpathy/status/1930326685918081077]
themes: [verification, agentic-coding]
summary: Creating has a generate step and a discriminate step; LLMs made the first instant, so coding speed now depends on cutting the cost of checking.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Verification, not generation, is the bottleneck

He split creative work into generation and discrimination, as in a GAN. Discrimination can be costly. Images are easiest to judge, since the visual system is fast. Text is harder: you must read, and code needs reasoning. Audio may be harder still, because it forces a time axis and cannot be skimmed. LLMs made code generation near instant but did little for checking. A person still reads the result. His main criticism is that models give far too much code per request, as if stage two did not exist. A good model should split work into small steps that are easy to check. Programming is mostly staring at code, not typing it, so a faster step one gives little overall gain (Amdahl's law). In a reply he said a coloured diff view is a weak but real way to use vision, and he wants richer visual code views.

## In his words

> "It's about staring at the code (2)."
> — Andrej Karpathy, 2025-06-04

## Apply

- Ask the model for one small, checkable change per turn, not a large patch.
- Our reading: ask it to say how you can check each change: a test, a diff, a run.
- Our reading: prefer outputs you can judge visually (diffs, diagrams, rendered pages) over long text.

## Context

- June 2025, replying to a post on the "verification gap". He tied it to his earlier workflow: [AI-assisted coding rhythm](2025-04-24-ai-assisted-coding-rhythm.md). See also [codebases as spatial maps](2026-09-12-codebases-as-spatial-maps.md).
- Same loop from his talk two weeks later: [Partial autonomy and the autonomy slider](2025-06-17-partial-autonomy-and-autonomy-slider.md).
