---
title: Configure software with skills, and build the most forkable repo
date: 2026-02-20
source: x
url: https://x.com/karpathy/status/2024987174077432126
also: [https://x.com/karpathy/status/2025055650682994749, https://x.com/karpathy/status/2024723548984791405, https://x.com/karpathy/status/2027099040073286087]
themes: [agent-native-software, agentic-coding]
summary: Instead of config files and if-else branches, ship skills that tell an agent how to modify a small core repo for each setup.
status: current
superseded_by:
anthropic: false
---

# Configure software with skills, and build the most forkable repo

While reading about NanoClaw, Karpathy found a new way to handle configuration. The project has no config flags. A skill such as `/add-telegram` instructs your agent to edit the real code to add that integration. This avoids config sprawl and if-then-else branches. His summary of the new meta: write the most forkable repo possible, then add skills that fork it into any special setup. He links this to meta-learning (for example MAML), which trains a model to fine-tune to any task in few steps. The software equivalent is the repo that is easiest to fork. He says nanochat was designed with this goal.

## In his words

> "write the most maximally forkable repo and then have skills that fork it"
> — Andrej Karpathy, 2026-02-20

## Apply

- Keep the core small, readable and dependency-light.
- For each optional feature, write a skill (a Markdown file) that tells the agent which files to change and how to test the result.
- Replace long config files by a short list of such skills in the README.
- Add tests so the agent can check that a forked variant still works.

## Context

- Related: [Point an agent at a library and rip out only the part you need](2026-02-11-rip-out-functionality-with-agents.md) and [Claws are a new layer on top of LLM agents](2026-02-20-claws-new-layer-of-the-stack.md).
