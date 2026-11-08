---
title: Leaderboards get gamed; watch real usage
date: 2025-04-30
source: x
url: https://x.com/karpathy/status/1917546757929722115
also: [https://x.com/karpathy/status/1909520827155992833, https://x.com/karpathy/status/1909642960935043581, https://x.com/karpathy/status/1917612148345430377, https://x.com/karpathy/status/1896266683301659068]
themes: [verification, ai-progress]
summary: A top rank on a public arena can mean the lab tuned for the arena. Trust your own use and real-usage signals such as OpenRouter rankings.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Leaderboards get gamed; watch real usage

After a paper on the LMArena leaderboard, he said his own experience matched its doubts. A Gemini model once ranked far ahead of the rest, but it was worse in daily use. Claude 3.5 felt top tier to him yet ranked low. Several small models with little real knowledge ranked high. His reading: some labs focus on arena score, so they build better arena models, not better models. He suspected such models favour nested lists, bullets and emoji. As a new candidate for a hard-to-game eval he named the OpenRouter rankings. People there switch models for real work, with private evals and a real cost, so each choice is a vote. In a reply he said he used a word-of-mouth blend of many small private evals.

## Apply

- Do not choose a model from one public leaderboard. Test it on a few tasks of your own for several days.
- Keep a small private eval set from your real work and re-run it on each new model.
- Check usage-based rankings, such as the share of traffic a model gets, as a second signal.

## Context

- April 2025. Related: [go talk to the model: private evals](2025-11-18-go-talk-to-the-model-private-evals.md) and [all LLMs sound the same](2024-10-06-all-llms-sound-the-same.md).
- In a reply of 2025-04-08 he called the pull toward arena style a "taste issue", like superhero films taking over Hollywood.
- First raised on [2025-03-02](https://x.com/karpathy/status/1896266683301659068): he said Chatbot Arena got so much attention, partly through him, that labs overfit to it by mining its prompts, sending many private test runs and training on its rankings. His answer then was an ensemble of private evals.
