---
title: Keep the AI on a tight leash for code you care about
date: 2025-04-24
source: x
url: https://x.com/karpathy/status/1915581920022585597
also: [https://www.youtube.com/watch?v=LCEmiRjPEtQ]
themes: [agentic-coding, context-and-prompting]
summary: Review is the bottleneck, so work in small, specific steps: give context, compare approaches, review, test and commit each change.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Keep the AI on a tight leash for code you care about

For code he cares about, Karpathy uses a fixed loop. Put the relevant context into the prompt.
Describe one small change and ask for several approaches with pros and cons, not code. Pick one
and get a first draft. Review it and learn, with the API docs open. Test. Commit, ask what to do
next, and repeat. He treats the model as an over-eager junior intern with great memory. In his
June 2025 YC talk he gave the reason. The AI writes code in seconds, but a person must still check
it, and a 1,000-line diff is no gain if you must find the bugs yourself. Vague prompts give wrong
answers and loops, so he writes complete, specific ones. For larger work he puts an auditable
artifact in the middle, such as a course syllabus, so the AI stays inside it.

## In his words

> "tight leash on this new over-eager junior intern"
> — Andrej Karpathy, 2025-04-24

## Apply

- Ask for two or three approaches with trade-offs before any code. Plan mode does this.
- Limit each request to one change you can read in a few minutes. Commit after each one that
  passes tests.
- Spend an extra minute on the prompt: name the files, the constraints and the expected result.
- Put a fixed artifact (spec, syllabus, schema) between generation and use, so you can audit it.
- Ask the agent to explain any API you do not know before you accept the code.

## Context

- Posted 2025-04-24 and repeated in the YC AI Startup School talk of 2025-06-17, before agents
  could run long tasks alone.
- Still current in our reading. After December 2025 he lets agents take much larger "macro
  actions" ([Programming moved to English](2026-01-26-programming-in-english-december-shift.md)),
  and the check moved toward tests and success criteria
  ([Give agents success criteria](2026-01-26-success-criteria-not-steps.md)). But in January 2026
  he still said to watch agents "like a hawk" on code you care about
  ([subtle conceptual mistakes](2026-01-26-coding-agents-make-subtle-conceptual-mistakes.md)).
- The strict counterpart to [vibe coding](2025-02-02-vibe-coding-for-throwaway-projects.md).
  Related: [partial-autonomy apps](2025-06-17-partial-autonomy-and-autonomy-slider.md) and
  [the junior intern test](2024-12-14-would-you-hire-it-as-a-junior-intern.md).
