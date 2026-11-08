---
title: Models cannot yet check their own work in video and games
date: 2026-08-02
source: x
url: https://x.com/karpathy/status/2083749667410727319
also: []
themes: [verification, llm-psychology]
summary: Worlds and games expose a gap: models cannot watch video or play a game natively, so they audit their output slowly through screenshots.
status: current
superseded_by:
anthropic: true
kind: practice
---

# Models cannot yet check their own work in video and games

While Opus 5 built a Lord of the Rings scene in code, Karpathy saw a limit. The model could not
watch a video or play a game at speed. To audit its work it took screenshots at chosen moments,
slowly and with care, and still made mistakes and left rough parts. He calls this a missing raw
capability: native multimodal perception of moving scenes and gameplay. Our reading: the loop
"build, look, fix" that works well for web pages is much weaker when the result changes over time.

## Apply

- For animation or game work, give the agent a way to record state: logs, frame dumps, scripted
  playthroughs and assertions, not only screenshots.
- Add simple checks that need no vision, such as object counts and positions at set times.
- Plan for human review of the result. Expect visual jank that the agent did not see.

## Context

- Same post as [a huge creative test for models](2026-08-02-big-budget-creative-test-for-models.md).
- Compare [Success criteria, not steps](2026-01-26-success-criteria-not-steps.md): it works best
  when the agent can check the goal itself.
