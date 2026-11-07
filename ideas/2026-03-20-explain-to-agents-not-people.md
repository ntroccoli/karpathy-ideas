---
title: Explain things to agents, and let agents teach people
date: 2026-03-20
source: talk
url: https://podcasts.apple.com/us/podcast/no-priors-artificial-intelligence-technology-startups/id1668002688?i=1000756334966
also: []
themes: [learning-and-education, agent-native-software]
summary: Write a skill that tells an agent how to teach your code, and docs in markdown; keep your own effort for what agents cannot invent.
status: current
superseded_by:
anthropic: false
---

# Explain things to agents, and let agents teach people

Karpathy boiled GPT training down to about 200 lines of Python, called microGPT. He started a
video guide, then stopped. The code is so short that anyone can ask an agent to explain it in
their own language, as often as they like. So he now explains to agents. A skill can script the
path an agent should take when it teaches a code base. Library docs should be markdown for
agents, not HTML for people. He says agents could not produce the 200-line version themselves:
that distillation is his contribution. The rest of the teaching is the agent's job.

## In his words

> "I'm not explaining it to people anymore. I'm explaining it to agents."
> — Andrej Karpathy, 2026-03-20

## Apply

- Add a skill or instructions file to your repo: the order in which an agent should walk a newcomer through the code.
- Publish docs as markdown. Test them by asking an agent to explain a function three ways.
- Spend your own time on what agents miss: the simplest design, the key insight, the right order of ideas.
- Keep an example small enough for an agent to read whole.

## Context

- From the No Priors episode of 2026-03-20. He admits he can still explain some things better than
  agents, but expects that to change fast.
- Related: [Build docs and tools for agents](2025-03-12-write-docs-for-llms.md).
