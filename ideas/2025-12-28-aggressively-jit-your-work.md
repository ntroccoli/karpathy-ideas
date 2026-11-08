---
title: Connect your tools so the agent needs no manual steps
date: 2025-12-28
source: x
url: https://x.com/karpathy/status/2005353145128583447
also: []
themes: [agentic-coding, agent-native-software]
summary: Connect your databases, monitoring and deploy tools to the agent so tasks need almost no manual steps from you.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Connect your tools so the agent needs no manual steps

In a reply about wiring everything into a coding agent through skills, Karpathy gave a short rule: aggressively JIT your work. The goal is that you add almost no latency and take almost no actions yourself. He calls it digital Factorio time, a reference to a game about automating factory chains. Each tool you connect removes one manual hand-off from the loop.

## Apply

- List the manual steps you repeat in a task (check a log, query a table, deploy). Make a skill or CLI for each.
- Give the agent scoped credentials for those tools so it can act without you.
- Measure a task by how many times it waits for you. Reduce that number.

## Context

- A reply from 2025-12-28. The source is a short reply, so the idea is small.
- Related: [learn the new programmable layer](2025-12-26-learn-the-new-programmable-layer.md).
