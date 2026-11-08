---
title: Give agents success criteria, not steps
date: 2026-01-26
source: x
url: https://x.com/karpathy/status/2015883857489522876
also: [https://x.com/karpathy/status/2015887154132746653]
themes: [agentic-coding, verification]
summary: Agents loop well toward a checkable goal; describe the goal and the test, not the steps.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Give agents success criteria, not steps

LLM agents are very good at looping until they meet a specific goal. Karpathy finds most of the
leverage there. So change from imperative instructions to declarative ones: say what "done"
looks like and how to check it, then let the agent iterate. He gives three patterns: have the
agent write tests first and then make them pass; put the agent in a loop with a browser tool so
it can see its result; and write a naive, obviously correct version first, then ask the agent to
optimize it while it keeps the output correct.

## In his words

> "Don't tell it what to do, give it success criteria and watch it go."
> — Andrej Karpathy, 2026-01-26

## Apply

- Start each task with a check the agent can run: a failing test, a script that prints a
  number, or a page it can load and inspect.
- Ask for tests first: "Write tests for X that fail now. Then make them pass. Do not change the
  tests."
- For speed work, keep the slow correct version as the reference and compare outputs after
  every change.
- Give the agent the tool it needs to see the result (browser, logs, benchmark), so it can
  loop without you.

## Context

- In a reply the same day he called spec-driven development the limit of the move from imperative to declarative: being declarative entirely.
- From a long post of notes after weeks of coding mostly with Claude Code, written after models
  reached a new level of coherence in December 2025.
- The same post lists the agents' typical mistakes: silent wrong assumptions, overcomplicated
  code, and edits to unrelated code.
