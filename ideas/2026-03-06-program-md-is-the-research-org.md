---
title: Write the agent's operating rules as a program.md skill
date: 2026-03-06
source: github
url: https://github.com/karpathy/autoresearch/blob/master/program.md
also: [https://github.com/karpathy/autoresearch]
themes: [context-and-prompting, verification]
summary: The autoresearch program.md shows how to brief a long-running agent: fixed scope, read-only judge, ledger, simplicity rule, crash policy.
status: current
superseded_by:
anthropic: false
---

# Write the agent's operating rules as a program.md skill

In autoresearch, the human does not edit the Python code. The human edits `program.md`, which
Karpathy calls a very light "skill". The file shows how to brief an agent that runs for hours.
Setup steps come first: agree a run tag, create a branch, read the in-scope files, check the
data, and create an empty results ledger. Then the rules. The agent may edit one file only. The
evaluation code is read-only and no new packages are allowed. One number decides success. A
"simplicity criterion" says that a tiny gain from ugly code is not worth it, and that deleting
code at equal results is a win. The loop is: commit, run, read the number, keep or reset.

## In his words

> "A 0.001 val_bpb improvement from deleting code? Definitely keep."
> — Andrej Karpathy, 2026-03-06

## Apply

- Split files into "you edit" and "never touch", and name the judge file as read-only.
- Send run output to a log file and read only a grep of it, so logs do not fill the context.
- Keep a tab-separated ledger (commit, metric, memory, keep/discard/crash, note) that is not
  committed. Use tabs, because commas break in free-text notes.
- Set a crash policy: fix typos, skip broken ideas, give up after a few tries, kill runs that
  take twice the budget.
- If the agent should not ask permission mid-run, say so, and say what to do when ideas run out
  (re-read the code, combine near misses).

## Context

- Repository created 2026-03-06. The README says to run the agent with permissions disabled, so
  isolate the machine or folder first.
- Overview of the loop and results: [Autoresearch](2026-03-07-autoresearch-loop.md). Same
  principle as [success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
