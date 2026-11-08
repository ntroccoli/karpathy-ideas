---
title: A quoted tilde is not expanded, so check an agent's delete commands
date: 2025-08-31
source: x
url: https://x.com/karpathy/status/1962166818325590122
also: []
themes: [security-and-dependencies, agentic-coding]
summary: In shell quotes, "~" stays a literal folder name; an unquoted rm -rf ~ meant for that folder deletes your home folder instead.
status: current
superseded_by:
anthropic: false
kind: practice
---

# A quoted tilde is not expanded, so check an agent's delete commands

A user posted about a close call: while they coded with AI on a plane, a delete command almost
went wrong. Nobody lost files. Karpathy replied that this almost happened to him the day before.
His LLM suggested the safe form, `rm -rf '~'`, with the tilde in single quotes. He explained the
cause. A line such as `export WANDB_DIR="~/.cache/wandb"` in a shell startup file keeps the tilde
as plain text inside the double quotes. A tool that uses that path then creates a real folder
named `~` in the current folder. The danger: to remove that folder, you or an agent may type
`rm -rf ~` without quotes. The shell expands a bare `~` to your home folder, so the command
deletes your whole home folder. He still called it very scary.

## In his words

> "The ~ isn't expanded inside "quotes" and creates a literal ~ directory"
> — Andrej Karpathy, 2025-08-31

## Apply

- Quote odd names in single quotes, as in `rm -rf '~'`, and never run `rm -rf` on a bare `~`.
- Our addition: in config files, write `$HOME/.cache/wandb`, not `"~/.cache/wandb"`.
- Our addition: before running a delete, run `ls` on the exact same path and read the result.
- Our addition: do not auto-approve `rm -rf` in your agent's permission settings.

## Context

- Reply of 2025-08-31 to a post by @lawrennd about a close call while vibe coding on a flight.
  His reply covers the quoting problem and the safe quoted form his LLM suggested. The steps
  marked "Our addition" are ours, not his.
