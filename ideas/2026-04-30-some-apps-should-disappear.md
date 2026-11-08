---
title: Some apps should disappear into the model
date: 2026-04-30
source: blog
url: https://karpathy.bearblog.dev/sequoia-ascent-2026/
also: [https://karpathy.bearblog.dev/vibe-coding-menugen/, https://www.youtube.com/watch?v=96jN2OCOfLs]
themes: [agent-native-software]
summary: A multimodal model can do in one step what MenuGen needed a full web stack for; much of an app is scaffolding around a transformation.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Some apps should disappear into the model

Karpathy built MenuGen as a normal web app: OCR the menu, generate a picture for each dish,
show the page. It needed a front end, APIs, deployment, auth and payments. He later saw a
version where you photograph the menu and a multimodal model draws the dishes straight onto the
image. Most of the app is gone, and the network turns input media into output media. His
lesson for founders: AI is not only a faster way to build old apps. Some apps should stop
being apps. The old stack wrapped code around a conversion that the model can do directly.

## Apply

- For a new idea, first try one prompt with a strong multimodal model before you design an app.
- If a prototype is "one model call plus a loop", question whether it needs auth, a database
  and hosting at all.
- Keep an app only where it adds what the model cannot: shared state, payments, private data,
  guarantees.

## Context

- In the 2025 MenuGen post he already asked whether the app could be just a prompt, like a
  custom GPT or an artifact. The 2026 summary gives the answer. See
  [Vibe coding a real app is easy locally and hard to ship](2025-04-27-vibe-coding-real-app-lessons.md).
- The text is an LLM-made summary of his Sequoia talk that he published on his blog.
