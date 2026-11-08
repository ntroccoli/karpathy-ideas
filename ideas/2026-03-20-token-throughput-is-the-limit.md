---
title: With coding agents, your skill and token use are the limit
date: 2026-03-20
source: talk
url: https://podcasts.apple.com/us/podcast/no-priors-artificial-intelligence-technology-startups/id1668002688?i=1000756334966
also: []
themes: [agentic-coding]
summary: Run several agents in parallel on separate tasks and give them big macro actions; when it fails, suspect your setup before the model.
status: current
superseded_by:
anthropic: false
kind: practice
---

# With coding agents, your skill and token use are the limit

Karpathy says that since December 2025 he writes almost no code by hand. He delegates to agents
and works in "macro actions": a whole feature goes to one agent, a separate feature to a second,
a research task to a third. Each run takes around twenty minutes at high effort, so he moves
between several checkouts and reviews the results as closely as the code deserves. He feels that
unused subscription capacity means wasted throughput, like idle GPUs in his PhD years. When a
task fails, he first suspects his own setup: thin agent instructions, no memory tool, or steps
not yet connected. He calls this a skill issue, and sees it as good news, since skill can improve.

## Apply

- Split work into tasks that do not touch the same files, and give each to its own agent session
  or checkout.
- Give each agent a complete feature, not a line edit. Review the result at the depth the code needs.
- When an agent fails, update the agent instructions file or add a tool or memory before you blame the model.
- Track how much of your plan limit you leave unused. Fill the gaps with a queued task.

## Context

- From the No Priors episode of 2026-03-20 (third-party transcript used). He describes this as a
  state of "AI psychosis": the possibilities are unexplored, so he feels he must keep pushing.
- Next step in his view: agents that run without you. See [the autoresearch loop](2026-03-07-autoresearch-loop.md)
  and [Give agents success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
