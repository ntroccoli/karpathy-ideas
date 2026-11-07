---
title: Coding agents are weak on novel code
date: 2025-10-17
source: talk
url: https://www.dwarkesh.com/p/andrej-karpathy
also: []
themes: [agentic-coding]
summary: In October 2025 he found agents good for boilerplate and tested ports but poor on unusual code, and preferred autocomplete for precise work.
status: superseded
superseded_by: 2026-01-26-programming-in-english-december-shift.md
anthropic: false
---

# Coding agents are weak on novel code

Building the nanochat repo, Karpathy found agents of little help. He sees three styles of coding:
write by hand, write with autocomplete, or hand the task to an agent. Agents do well on boilerplate
and on code common on the internet. They did badly on nanochat because it is unusual. The models
kept pushing the usual way, such as the standard PyTorch parallel wrapper he had replaced. They
added defensive code and used old APIs, so the repo got bloated. They did help with a
report script and with a Rust port of a tokenizer, where he had Python code he understood and tests.
He says models struggle with code that has never been written, which is what AI research needs,
so his timelines are longer.

## In his words

> "For now, autocomplete is my sweet spot."
> — Andrej Karpathy, 2025-10-17

## Apply

- Use an agent for boilerplate, glue code and ports where you have a reference version and tests.
- For unusual design, tell the agent which standard choice you rejected and why, in the prompt.
- Use autocomplete when you know exactly where code goes: pointing is higher bandwidth than English.
- Review agent output for extra try/except blocks and old APIs.

## Context

- Dwarkesh Patel interview, 2025-10-17, model era of GPT-5 Pro and early Claude Code.
- Superseded. In January 2026 he wrote that he went from about 80% manual and autocomplete
  coding in November 2025 to about 80% agent coding in December, after models crossed a
  coherence threshold. See [Programming moved to English in December 2025](2026-01-26-programming-in-english-december-shift.md).
  His warnings about bloat and wrong assumptions still hold:
  [Coding agents make subtle conceptual mistakes](2026-01-26-coding-agents-make-subtle-conceptual-mistakes.md).
