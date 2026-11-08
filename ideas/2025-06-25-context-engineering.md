---
title: Context engineering, not prompt engineering
date: 2025-06-25
source: x
url: https://x.com/karpathy/status/1937902205765607626
also: [https://x.com/karpathy/status/2035174102974308666, https://x.com/karpathy/status/1937909397180796982]
themes: [context-and-prompting, agentic-coding]
summary: The skill is filling the context window with the right information for the next step, plus specs, tools and workflows, not polishing one prompt.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Context engineering, not prompt engineering

Karpathy supports the term context engineering over prompt engineering. In an industrial LLM app,
the job is to fill the context window with the right information for the next step. That covers
the task description, few-shot examples, retrieved data, tools, state, history and compaction.
Too little context hurts, and so does too much. He adds that this is one piece of a thick layer of
app software: control flow, dispatching the right model, generation and verification UX,
guardrails, evals and parallelism. In March 2026 he applied the same view to coding agents. The
skill is context and spec engineering plus the rest of the harness, tools and workflows. Results
depend on what the agent knows about the project and what it can do, more than on the wording of
one message.

## In his words

> "filling the context window with just the right information"
> — Andrej Karpathy, 2025-06-25

## Apply

- Keep a short, current context file per repo: layout, commands, rules, known traps.
- Review what loads at the start of each agent session (instruction files, skills, open files).
  Remove what the task does not need.
- Write a spec for each task: goal, limits, how to check it. See
  [success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
- Use subagents for searches and large reads, so the main context stays small.
- Improve the tools and workflows (test runner, logs, scripts) before you rewrite prompts.

## Context

- Posted 2025-06-25, a week after his talk on [Software 3.0](2025-06-17-software-3-0-english-as-programs.md).
  The 2026-03-21 reply came after his No Priors podcast, where he still used the word "prompt".
- Related: [state stakes and scope](2025-08-09-models-too-agentic-state-stakes-and-scope.md),
  [Start a new chat when the topic changes](2025-02-27-fresh-chat-per-topic.md) and
  [Fewer bits, administered just right](2026-11-01-shorter-prompts-fewer-bits.md).
