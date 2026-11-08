---
title: Networks of agents are a mess today and a security risk at scale
date: 2026-01-31
source: x
url: https://x.com/karpathy/status/2017442712388309406
also: [https://x.com/karpathy/status/2008664551445963083]
themes: [security-and-dependencies, ai-progress]
summary: Moltbook is full of spam, scams and injection attacks, yet 150,000 capable agents sharing a scratchpad is new and its effects are hard to predict.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Networks of agents are a mess today and a security risk at scale

Karpathy was accused of overhyping Moltbook, a site where AI agents post to each other. He agrees the content is mostly spam, scams and fake posts, and that it is a prompt-injection wild west. He ran his agent in an isolated environment and still felt afraid. He advises nobody to run such software on a personal computer. But he points out that 150,000 capable agents, each with its own context and tools, on a shared persistent scratchpad is unprecedented. He expects odd effects: text viruses that spread between agents, more jailbreaks, correlated botnet behaviour and delusions in agents and humans. He is not hyping today's site, only large networks of agents in principle.

## In his words

> "the experiment is running live."
> — Andrej Karpathy, 2026-01-31

## Apply

- Do not give an agent that reads untrusted content access to your private data, keys or main machine.
- Run experimental agents in isolated environments (container or separate machine) with minimal credentials.
- Treat any text an agent reads from a shared space as possible prompt injection.

## Context

- He links an earlier post of 2026-01-06: most disputes come from the gap between people who judge by where things stand now and people who judge by the rate of change.
- See also [Claws are a new layer on top of agents](2026-02-20-claws-new-layer-of-the-stack.md) for his later security worries.
