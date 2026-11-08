---
title: Build partial-autonomy apps with an autonomy slider
date: 2025-06-17
source: talk
url: https://www.youtube.com/watch?v=LCEmiRjPEtQ
also: [https://www.dwarkesh.com/p/andrej-karpathy, https://karpathy.bearblog.dev/year-in-review-2025/]
themes: [agent-native-software, agentic-coding]
summary: Good LLM apps manage context, chain model calls, give a GUI for fast checking and let the user set how much the AI does.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Build partial-autonomy apps with an autonomy slider

Karpathy says good LLM apps, such as Cursor, do four jobs on top of the model. They manage context.
They orchestrate several model calls. They have an interface made for
checking the work, such as a red and green diff you accept with one key. And they have an autonomy
slider: the user picks small help (complete a line), medium (edit a file) or large (do the task).
He compares it to the Iron Man suit, part tool and part agent, and prefers such suits to demos of
fully autonomous agents. The goal is a fast loop between the AI making a change and the human
checking it, with the slider moving right over time. In his 2025 review he added a guess about the
market: labs will train capable generalists, and apps will turn them into professionals for one
field with private data, sensors, actuators and feedback loops.

## Apply

- Give your agent workflow levels: small reviewed edits for risky code, long autonomous runs for
  low-risk work. Let users raise autonomy later without a new product.
- Show changes as diffs, screenshots or rendered output, not long text.
- Ask of any product: can the AI see what a human sees, act as a human acts, and can a human
  supervise it?
- Build your moat from data, tools and feedback loops for one field, not from prompts alone.

## Context

- YC AI Startup School talk of 2025-06-17; repeated in his 2025 review (2025-12-19). In the
  Dwarkesh interview (2025-10-17) he applies the slider to call centres and programming: see
  [Jobs change before they vanish](2025-09-25-ai-and-jobs-radiologists-and-engineers.md).
- Related: [Keep the AI on a tight leash](2025-04-24-ai-assisted-coding-rhythm.md),
  [Context engineering](2025-06-25-context-engineering.md) and
  [the autonomy ladder](2024-03-12-swe-autonomy-ladder-supervising-automation.md).
