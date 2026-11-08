---
title: Models are too agentic by default, so state stakes and scope
date: 2025-08-09
source: x
url: https://x.com/karpathy/status/1954224651443544436
also: []
themes: [context-and-prompting, llm-psychology]
summary: Tuned models over-think simple questions and search the whole repo, so tell them the scope and the depth you want.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Models are too agentic by default, so state stakes and scope

Karpathy notes that models tuned hard on benchmarks are agentic by default. They think a long time, search the whole repository, and take minutes on a simple question. He often has to say stop, you are overthinking, look only at this one file. He wants a way to tell the model how much effort the stakes deserve: from a quick look to go away for thirty minutes and be certain. Until models offer that, you must say it in the prompt.

## In his words

> "Do not over-engineer"
> — Andrej Karpathy, 2025-08-09

## Apply

- Begin prompts with the scope: 'quick look, this one file, no tools' or 'deep, verify every claim'.
- Match the effort setting to the task. Use low effort for lookups and high for risky changes.
- Name the files the agent should read, so it does not search everything.

## Context

- Posted 2025-08-09.
- Related: [context engineering](2025-06-25-context-engineering.md).
