---
title: Make model output easier to understand, from STE to video
date: 2026-10-02
source: x
url: https://x.com/karpathy/status/2105819303471976479
also: []
themes: [output-and-reading, learning-and-education]
summary: To follow what LLMs produce, ask for controlled English, then diagrams, then HTML pages, then custom explainer videos, each easier to take in.
status: current
superseded_by:
anthropic: false
---

# Make model output easier to understand, from STE to video

As agents do more work, people will spend more time understanding what models produce. Karpathy
gives four formats, each better than the one before. First, writing: ask the model to explain
something in ASD-STE100, a controlled English made for aircraft maintenance manuals. Its strict
rules give clean text. The spec is very strict, so he sometimes asks for a rough 80% match.
Second, diagrams instead of prose. Third, HTML for interactive pages with animation. Fourth, and
the one he is most hopeful about, custom explainer videos on any topic, for example in the style
of 3Blue1Brown, with narration from a speech API. He says this is starting to work.

## Apply

- Add to a prompt: "Explain in ASD-STE100, about 80% strict."
- When a text answer is dense, ask for a diagram or a one-page infographic instead.
- Ask for "HTML" for anything with several parts, such as a comparison or a walkthrough.
- For a topic you must learn, ask for a short explainer video script with scenes and narration, and
  have the agent use a speech API or a local text-to-speech tool.

## Context

- The post drew a large audience. Some experienced users answered that they had used these
  tricks for a year. He replied that most people now paying attention started in the last year.
- Builds on [Text chat is the terminal era](2025-03-31-text-chat-is-the-terminal-era.md). The
  second half of the same post is [Oversight, and software made to be thrown away](2026-10-02-oversight-and-discardable-software.md).
