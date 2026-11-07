---
title: Test frontier models with a large creative job
date: 2026-08-02
source: x
url: https://x.com/karpathy/status/2083749667410727319
also: [https://x.com/karpathy/status/2083948654377996480, https://x.com/karpathy/status/2084017844455690558, https://x.com/karpathy/status/2102484651072016848]
themes: [ai-progress, agent-native-software]
summary: Replace the pelican-on-a-bicycle test with a large open task, where models build custom worlds no person would make by hand.
status: current
superseded_by:
anthropic: true
---

# Test frontier models with a large creative job

Karpathy says simple tests such as a pelican riding a bicycle are no longer enough. His
extension: give the model the opening paragraph of The Lord of the Rings, a budget of one million
tokens (about ten dollars), and ask for a three.js render. Opus 5 worked for about two hours and
wrote some 5,500 lines of code that drew the story procedurally. The result was rough but
impressive. His main point is economic: nobody would spend the time on something this custom, but
models have unlimited patience, so it moves from nobody doing it to a plain "why not". He expects
hyper-custom worlds and games made on demand. In replies he adds that procedural code can drive
storyboarding and control, with video-to-video models adding the final look. He also likes the
idea of turning a historical photo into a playable world.

## Apply

- Build your own private test: one open task, a fixed token budget, a result you can inspect.
- Ask for custom worlds, simulators or games from a text or image when a one-off is enough.
- Use code for layout and control, and a video model for texture and style.

## Context

- Related weakness: [Models cannot check their own work in video and games](2026-08-02-models-cannot-audit-video-and-games.md).
- He published the playable source at karpathy.ai/lotr-movie.
