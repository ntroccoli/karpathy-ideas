---
title: Make the whole DevOps lifecycle agent-native
date: 2026-03-26
source: x
url: https://x.com/karpathy/status/2037200624450936940
also: [https://x.com/karpathy/status/2030722108322717778, https://x.com/karpathy/status/2040838208674734473]
themes: [agent-native-software]
summary: The hard part of shipping an app is assembling services, not code; services must offer APIs, CLIs and docs an agent can use without a human clicking.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Make the whole DevOps lifecycle agent-native

When Karpathy built MenuGen, the code was not the hardest part. The hard part was assembling many
services like furniture: payments, auth, database, security, domain names. He wants to tell an
agent "build menugen" and get a deployed site. The agent would browse the services, read docs, get
API keys, debug in dev and deploy. This is "just barely" possible now, but needs a redesign. The
whole DevOps lifecycle must become code, with command-line tools and APIs that suit agents. A
human should not visit a web page or click a button. He adds that businesses still give
click-here instructions. He would rather get something to paste into his agent.

## In his words

> "the entire DevOps lifecycle has to become code"
> — Andrej Karpathy, 2026-03-26

## Apply

- Ship a CLI or API for every action in your product, and a copy-paste prompt for agents next to
  each web instruction.
- Publish docs as one or a few large markdown files, reachable with a plain curl. He found X's
  API docs hard to feed to an agent because they are many short pages.
- Offer scoped, revocable API keys that an agent can request without a human in the loop.

## Context

- Reply to Patrick Collison, who quoted Karpathy's 2025 MenuGen post.
- In a related reply he asked X to make read access cheap for agents, noting that about 30
  minutes of hacking had cost him $200.
- Related: [The LLM OS](2023-09-28-llm-as-operating-system-kernel.md).
