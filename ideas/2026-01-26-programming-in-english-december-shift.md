---
title: Programming moved to English in December 2025
date: 2026-01-26
source: x
url: https://x.com/karpathy/status/2015883857489522876
also: [https://x.com/karpathy/status/2015895365674021136, https://x.com/karpathy/status/2008055508952129723, https://karpathy.bearblog.dev/sequoia-ascent-2026/]
themes: [agentic-coding, ai-progress]
summary: Agent coding went from 20% to 80% of his work in a few weeks; the unit of programming moved from typing lines to delegating whole tasks.
status: current
superseded_by:
anthropic: false
---

# Programming moved to English in December 2025

Karpathy reports a fast change in his own work. In November 2025 about 80% of his coding was
manual with autocomplete. In December about 80% was agent coding with edits on top. He calls it
the biggest change in his workflow in about 20 years, and it took a few weeks. He thinks agents
(Claude and Codex in particular) crossed a threshold of coherence: generated chunks became larger
and more reliable. At Sequoia Ascent 2026 he described the new unit of work as a "macro action":
implement a feature, refactor a subsystem, research a library, set up a service, write tests and
fix failures, compare approaches. The programmer becomes an orchestrator of agents. He guesses that
a double-digit share of engineers already work this way, while public awareness is in the low
single digits. Writing code by prompt feels odd, a little like cheating.

## In his words

> "I really am mostly programming in English now"
> — Andrej Karpathy, 2026-01-26

## Apply

- Write requests as whole outcomes with a way to check them, not as edits to specific lines.
- Include "write tests, run them, fix failures" in the task, so the agent closes the loop.
- Ask for a plan and a comparison of approaches before a big change, and review the plan.
- Learn the setup: configure the agent, write project instructions, and find what it does well
  and badly.
- Re-test your habits every few months. Work that needed hand-holding may no longer need it.

## Context

- Same post as [Give agents success criteria, not steps](2026-01-26-success-criteria-not-steps.md)
  and [Coding agents make subtle conceptual mistakes](2026-01-26-coding-agents-make-subtle-conceptual-mistakes.md).
  On 2026-02-25 he repeated that agents mostly failed before December; see
  [Delegate long tasks](2026-02-25-delegate-long-tasks-decompose-well.md).
- The Sequoia text (blog, 2026-04-30) is an LLM-made summary of the talk that he checked and
  posted.
- This replaces his earlier tool mix. It supersedes
  [Coding agents are weak on novel code](2025-10-17-coding-agents-weak-on-novel-code.md)
  (October 2025: he found autocomplete the best fit for him) and
  [Stitch several coding tools together](2025-08-24-stitch-coding-tools-by-task.md)
  (August 2025: tab completion gave about 75% of his AI help).
