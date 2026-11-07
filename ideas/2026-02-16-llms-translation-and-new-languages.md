---
title: LLMs excel at translating code, which reopens language design
date: 2026-02-16
source: x
url: https://x.com/karpathy/status/2023476423055601903
also: [https://x.com/karpathy/status/2023482796619231308]
themes: [agentic-coding, ai-progress]
summary: Translation beats from-scratch generation because the old code is a detailed prompt and a test reference; we may rewrite much software.
status: current
superseded_by:
anthropic: false
---

# LLMs excel at translating code, which reopens language design

Karpathy says LLMs change the constraints of software, so it is a good time for work on programming languages and formal methods. He sees early signs in ports from C to Rust and in upgrades of old COBOL systems. LLMs are better at translation than at new generation for two reasons: the source code works as a very detailed prompt, and it gives a reference for concrete tests. Even Rust is not the best target language for LLMs, he says. Which language is best, and what stays for humans, are open questions. He expects that much of all software will be rewritten many times.

## In his words

> "the original code base acts as a kind of highly detailed prompt"
> — Andrej Karpathy, 2026-02-16

## Apply

- For a migration, give the agent the old code and tests, and ask for equivalence tests first. Compare outputs of old and new.
- Port in small modules and run the old and new side by side.
- Pick target languages with strong types and fast feedback, so the agent can check itself.

## Context

- Quote-post on a Thomas Wolf essay, which cites Anthropic's report on building a C compiler with agent teams.
- In a reply he said writing binaries directly is appealing for critical regions, but doubtful in general.
- Related: [Give agents success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
