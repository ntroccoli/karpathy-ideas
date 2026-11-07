---
title: Agents bloat code and ignore style rules in AGENTS.md
date: 2026-03-21
source: x
url: https://x.com/karpathy/status/2035173492447224237
also: []
themes: [agentic-coding, llm-psychology]
summary: Coding agents copy-paste, bloat abstractions and skip style rules; hooks or review may be needed because AGENTS.md alone does not enforce them.
status: current
superseded_by:
anthropic: false
---

# Agents bloat code and ignore style rules in AGENTS.md

Karpathy is not happy with agent code quality. Agents add needless abstractions, write code with
poor aesthetics and copy-paste blocks. They also do not follow style rules in AGENTS.md. His
example is a rule that each line does one thing and uses named intermediate variables. The agent
still writes dense lines that call two functions and index the result. He says hooks or slash
commands could clean this up, but he mostly stopped fighting it and moved on. On using an LLM as a
judge for soft rewards, he sees long-term risk from reward hacking, but says the easy gains are
not yet taken.

## In his words

> "I think agents bloat abstractions, have poor code aesthetics"
> — Andrej Karpathy, 2026-03-21

## Apply

- Put hard rules in a check the agent must pass (linter, formatter, test), not only in prose.
- Add a hook or a final "simplify" pass that asks the agent to remove duplication it created.
- Review diffs for copy-pasted blocks. Ask the agent to extract them before you merge.

## Context

- A reply after his No Priors podcast. It is a counterweight to the strong results he reported
  with [autoresearch](2026-03-07-autoresearch-loop.md): verifiable goals work, taste does not.
