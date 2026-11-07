---
title: Delegate long tasks to agents and make work legible to them
date: 2026-02-25
source: x
url: https://x.com/karpathy/status/2026731645169185220
also: [https://x.com/karpathy/status/2026735109077135652, https://x.com/karpathy/status/2026738848420737474]
themes: [agentic-coding, verification]
summary: Coding agents now run 30-minute tasks alone; gains come from clear specs, decomposition and making your system testable and observable.
status: current
superseded_by:
anthropic: false
---

# Delegate long tasks to agents and make work legible to them

Karpathy says coding agents basically did not work before December 2025 and basically work since. He gives an example: one prompt told an agent to log in to a machine, set up a model server, build a web dashboard, test it, set up services and write a report. The agent worked about 30 minutes, solved its own problems and finished. He says the next prize is to climb the layers: set up orchestrators with tools, memory and instructions that manage several coding agents. Agents work best on well-specified tasks you can test. The skill is to split a task, hand off the parts that work and help at the edges. In replies he added: it is delegation, not magic. Be explicit, and make your system testable, observable and legible so agents can run longer without you.

## In his words

> "It's not magic, it's delegation."
> — Andrej Karpathy, 2026-02-25

## Apply

- Write one prompt with the whole job: setup, build, test, service setup, notes for the agent, and a report for you.
- Put knowledge that sits in your head or in web UIs where tools can reach it: files, CLIs, logs.
- Add tests, logs and health checks so the agent can tell if it is done.
- Learn the agent's tools and what is easy or hard for it. Explicit instructions are faster.

## Context

- Follows [Programming moved to English in December 2025](2026-01-26-programming-in-english-december-shift.md) and builds on [Give agents success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
- In a reply he cited a Tesla saying that treats every manual action as a fault, meaning remove yourself as the bottleneck.
- 2026-02-25 post, Claude and Codex era (Opus 4.6 and similar).
