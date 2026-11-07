---
title: Claws are a new layer on top of LLM agents
date: 2026-02-20
source: x
url: https://x.com/karpathy/status/2024987174077432126
also: [https://x.com/karpathy/status/2024997757757653224, https://x.com/karpathy/status/2026367067407180063, https://x.com/karpathy/status/2024990400713556258]
themes: [agent-native-software, security-and-dependencies]
summary: Claws add orchestration, scheduling and persistence above agents; prefer small auditable ones in containers over a large vibe-coded one.
status: current
superseded_by:
anthropic: false
---

# Claws are a new layer on top of LLM agents

Karpathy bought a Mac mini to try "claws": persistent personal agents that handle orchestration, scheduling, context, tool calls and memory. Agents were a layer on LLMs, he says, and claws are a layer on agents. He is wary of OpenClaw: giving private data and keys to a 400,000-line vibe-coded project under attack is unappealing, with reports of exposed instances, RCE bugs and poisoned skills. He likes smaller ones such as NanoClaw (about 4000 lines in the core, runs in containers). Such code fits in a human head and in an agent context, so it is easier to audit. He prefers local hosting for tinkering and home devices.

## In his words

> "First there was chat, then there was code, now there is claw."
> — Andrej Karpathy, 2026-02-21

## Apply

- Prefer a claw whose core you can read in one session. Count the lines before you trust it.
- Run it in containers with only the credentials and folders it needs.
- Treat community skills as untrusted code. Read them before install.
- Do not point an always-on agent at your main accounts until you have tested its limits.

## Context

- Follows his earlier [warning on agent networks](2026-01-31-agent-networks-moltbook-uncharted.md). Design idea in the same thread: [Configure software with skills, and build forkable repos](2026-02-20-config-via-skills-forkable-repo.md).
- He said he does not see claws as direct competitors to each other: open design questions include where compute and state live.
