---
title: Coding agents make subtle conceptual mistakes, so watch them
date: 2026-01-26
source: x
url: https://x.com/karpathy/status/2015883857489522876
also: [https://x.com/karpathy/status/2015888674739912910, https://x.com/karpathy/status/2019851952033771710, https://x.com/karpathy/status/2027503094016446499]
themes: [agentic-coding, llm-psychology]
summary: Agent errors are no longer syntax slips but wrong assumptions and bloat, so keep an IDE open and review code you care about.
status: current
superseded_by:
anthropic: false
---

# Coding agents make subtle conceptual mistakes, so watch them

Karpathy says the mistakes of coding agents have changed. They are no longer syntax errors. They look like the errors of a hasty junior developer. The agent makes a wrong assumption for you and keeps going without a check. It does not ask questions, show trade-offs or push back, and it is often too agreeable. It also bloats code: a 1000-line design shrinks to 100 lines when you ask it for a simpler way. It may edit or delete comments it does not understand. Short rules in CLAUDE.md did not fix this. His answer is not to drop agents but to review closely. Hype about "no IDE" and "agent swarms" is too early for code you care about.

## In his words

> "I would watch them like a hawk, in a nice large IDE on the side."
> — Andrej Karpathy, 2026-01-26

## Apply

- Keep an IDE open next to the agent sessions. Read the diff, not only the summary.
- Ask the agent to list its assumptions before it codes, and to name the trade-offs. Use plan mode for anything larger than a small edit.
- After a working change, ask: "Can this be simpler? Remove dead code and unused abstractions."
- Check the final report against the data. He saw an agent name the wrong best result from its own table.
- Hand the agent well-scoped ideas to implement. In his tests it executed his ideas well but proposed weak experiments itself.

## Context

- Part of the 2026-01-26 notes written after about a month of coding mostly with Claude Code. See [Give agents success criteria, not steps](2026-01-26-success-criteria-not-steps.md) for the leverage part of the same post.
- In a reply on 2026-02-06 he listed more failures: it broke CLAUDE.md style rules, and it did not flag risky speed tricks in open-ended nanochat work.
- On 2026-02-27 he said he still edits in the IDE because seeing the code helps him prompt better.
- Not reversed by his later agent experiments. The "agent swarm" caution is about code you care
  about. His later agent research work ([Autoresearch](2026-03-07-autoresearch-loop.md),
  [You now program an organisation of agents](2026-02-27-programming-an-agent-research-org.md))
  runs only where a metric checks each result, and he still wanted interactive sessions he could
  watch ([The IDE is not dead](2026-03-11-bigger-ide-agent-command-center.md)).
