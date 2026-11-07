---
title: Give the LLM more context by rambling into voice mode
date: 2026-07-21
source: x
url: https://x.com/karpathy/status/2079610838143623371
also: []
themes: [context-and-prompting]
summary: When you are too lazy to type enough context, ramble by voice for ten minutes; the model restates your tangle more cleanly than you said it.
status: current
superseded_by:
anthropic: false
---

# Give the LLM more context by rambling into voice mode

Sometimes the model needs more information about your goal, but typing it is a chore. Karpathy
then switches to voice and talks for about ten minutes with no structure at all. He may say at the
start that this is speech recognition, so the model expects typos. He may also turn it into a short
interview over a few turns. He finds that models reconstruct long, incoherent rambling well, and
their echo of your thoughts is often cleaner than the original. The result is a better shared
picture of the task, so you correct less from then on.

## Apply

- Use `/voice` in Claude Code, or any dictation tool, when a task needs a lot of background.
- Start with a line such as "This is speech recognition, so ignore typos."
- Ask the model to restate your goal and list open questions before it starts to work.
- Fix the restated goal once, then continue. This costs less than many small corrections later.

## Context

- The opposite case is [Fewer bits, administered just right](2026-11-01-shorter-prompts-fewer-bits.md).
  Both aim at the same thing: the model must understand what you mean.
