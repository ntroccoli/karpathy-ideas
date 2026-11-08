---
title: Agent security is the wild west
date: 2025-06-16
source: x
url: https://x.com/karpathy/status/1934651657444528277
also: [https://x.com/karpathy/status/1934657940155441477, https://x.com/karpathy/status/1934672157734486200]
themes: [security-and-dependencies, agentic-coding]
summary: Prompt injection is like early computer viruses; risk peaks with local agents and with chat connectors, and agents need narrow actions, not free bash.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Agent security is the wild west

Sharing Simon Willison's "lethal trifecta" (private data, untrusted content, outside communication), he compared today to early computing. Malicious prompts hidden in web data and tools play the role of viruses, and defences are weak. He pointed to the mature idea of kernel and user space: an agent should get a few specific action types, not the power to run any bash script. He wants to adopt agents early, but the risk holds him back. In a follow-up he said the risk is highest for local agents such as Cursor or Claude Code. Chat on a website is safer until you turn on connectors, which combine badly with memory.

## In his words

> "Feels a bit like the wild west of early computing"
> — Andrej Karpathy, 2025-06-16

## Apply

- Check each agent setup for the three parts of the trifecta, and remove at least one.
- Give agents specific, limited tools instead of unrestricted shell access.
- Turn on chat connectors one at a time, and review what memory could leak.

## Context

- June 2025, when agent and connector use was still new. Related: [rethink dependencies and the supply chain](2026-03-24-rethink-dependencies-supply-chain.md).
- In a separate reply (2025-05-20) he said that when people say "alignment" he hears computer security, now with neural nets.
