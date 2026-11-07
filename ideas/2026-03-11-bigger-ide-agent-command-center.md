---
title: The IDE is not dead; the unit of work is now an agent
date: 2026-03-11
source: x
url: https://x.com/karpathy/status/2031767720933634100
also: [https://x.com/karpathy/status/2031616709560610993, https://x.com/karpathy/status/2031770607466291393, https://x.com/karpathy/status/2031774631498273005, https://x.com/karpathy/status/2031621392609980754, https://x.com/karpathy/status/2031626487401771219, https://x.com/karpathy/status/2031083551387701698]
themes: [agentic-coding, agent-native-software]
summary: Developers need a bigger IDE built around many supervised agents, not one file; headless loops lose the supervision that makes agent work trustworthy.
status: current
superseded_by:
anthropic: false
---

# The IDE is not dead; the unit of work is now an agent

Many people say agents end the age of the IDE. Karpathy says the opposite: people now program one
level higher, and the basic unit is an agent, not a file. So the IDE must grow. He wants an "agent
command center" for teams of agents: show or hide each one, see which are idle, open related tools
and view usage stats. He likes interactive sessions in tmux, where he can watch, ask questions
and add ideas. He dislikes headless "ralph loop" runs. Agents also stop looping on their own, so
he uses watcher scripts that send keys when a pane goes quiet, and he wants a built-in "full auto"
mode. He sees the agent set-up as "org code": you can fork an agentic organisation, which you
cannot do with a classical company.

## In his words

> "Reality: we're going to need a bigger IDE"
> — Andrej Karpathy, 2026-03-11

## Apply

- Run agents in tmux panes or a similar tool so you can read their work and step in.
- To keep a long task going, use a small watcher that checks for the "working" marker in each
  pane and re-sends the task prompt when it is missing.
- Write the roles, hand-offs and rules of your agent team as files in a repo, so you can version
  and fork them.

## Context

- Written during his autoresearch runs, with several agents in tmux. He noted that headless
  Codex did not work with autoresearch at that time, and that he wants an ssh mode because his
  work spans about 20 machines.
- See [autoresearch](2026-03-07-autoresearch-loop.md).
