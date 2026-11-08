---
title: A quoted tilde is not expanded, so check an agent's delete commands
date: 2025-08-31
source: x
url: https://x.com/karpathy/status/1962166818325590122
also: []
themes: [security-and-dependencies, agentic-coding]
summary: In shell quotes, "~" stays a literal folder name; an env var set that way can create a "~" directory, and a careless rm -rf of it can wipe your home.
status: current
superseded_by:
anthropic: false
kind: practice
---

# A quoted tilde is not expanded, so check an agent's delete commands

A user lost files when an AI-written command deleted the wrong thing while they coded on a plane.
Karpathy explained how this can happen. A line such as `export WANDB_DIR="~/.cache/wandb"` in a
shell startup file keeps the tilde as plain text inside the quotes. The result is a real folder
named `~` in the current directory. If you then ask for `rm -rf ~` without quotes, the shell
expands it to your home folder. His model had suggested the safe form with the tilde in single
quotes. He still called it very scary.

## In his words

> "love the LLM horror genre."
> — Andrej Karpathy, 2025-08-31

## Apply

- In config files, write `$HOME/.cache/wandb`, not `"~/.cache/wandb"`.
- Before running a delete, run `ls` on the exact same path and read the result.
- Quote odd names in single quotes, as in `rm -rf '~'`, and never run `rm -rf` on a bare `~`.
- Do not auto-approve `rm -rf` in your agent's permission settings.

## Context

- Reply of 2025-08-31 about a reader's close call. The `$HOME` advice is our addition; his
  example shows only the quoting problem.
