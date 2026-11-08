---
title: Build a small app in a language you do not know, one chat step at a time
date: 2025-03-23
source: x
url: https://x.com/karpathy/status/1903671737780498883
also: [https://x.com/karpathy/status/1903672057327452290, https://x.com/karpathy/status/1903674289490153664, https://x.com/karpathy/status/1903686409577537881, https://x.com/karpathy/status/1903837879937486912, https://x.com/karpathy/status/1903891179370123559, https://x.com/karpathy/status/1903988830488952973]
themes: [agentic-coding, learning-and-education]
summary: He shipped a working iPhone app in about an hour with no Swift experience, by following a chat with small steps; past 400 lines the chat started to struggle.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Build a small app in a language you do not know, one chat step at a time

Karpathy built an iOS app in Swift, which he had not used before, and had it running on his
phone about an hour later. He read no docs. He opened a ChatGPT conversation and followed its
instructions, step by step. The app is a calorie countdown: it tracks a net deficit against a
base metabolic rate. It was about 200 lines at first.

He kept steps small on purpose, because it taught him more and helped him avoid getting stuck.
He used a separate conversation for each stage (start, enhance, persistence, deploy to phone)
and shared them. By about 400 lines the work slowed and a long change got "dicey, long and
strenuous". His next move was to connect the model to Xcode or to Cursor. In a reply to a
blog post he said he uses "vibe coding" for moments like this, but that most of the time he
still reads the code and adds complexity slowly.

## In his words

> "I just opened a ChatGPT convo and followed instructions"
> — Andrej Karpathy, 2025-03-23

## Apply

- Choose a small tool you will use yourself and ask the chat for the first runnable version.
- Ask for one change at a time and run it each time; ask why when you do not understand a step.
- Start a new conversation for each stage and keep the links, so you can go back.
- Move to an editor-integrated tool once the code outgrows a chat window.

## Context

- Sequel to [Vibe coding is fine for throwaway projects](2025-02-02-vibe-coding-for-throwaway-projects.md); later he found shipping is harder than building: [Vibe coding a real app is easy locally and hard to ship](2025-04-27-vibe-coding-real-app-lessons.md).
- The code was for personal use; this is not a claim about production apps.
