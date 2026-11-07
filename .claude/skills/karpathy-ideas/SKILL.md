---
name: karpathy-ideas
description: Look up Andrej Karpathy's public ideas on working with LLMs and AI agents (agentic coding, verification loops, context, output formats, knowledge bases, agent-native software) and apply them to the current task. Use when designing an agent workflow, a prompt, a coding process, a knowledge base or a tool for agents, or when the user asks what Karpathy recommends.
---

# Karpathy Ideas

A curated, unofficial collection of Karpathy's public ideas, one file per idea, with date, source
link, summary, at most one short quote, and Apply steps.

Location: the repository root containing this skill (`index.md`, `ideas/`, `themes/`). If the
skill was copied elsewhere, read
`https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/llms.txt` and follow it.

## How to use it

For a whole project, start with `checklist.md`: answer each question (measure where it says
"Check"), then open only the linked ideas that point to a gap. For one task:

1. Delegate the search to a cheaper subagent (for example Haiku or Sonnet) when you can: it reads
   the 2-3 matching pages in `themes/` (or `index.md` for everything) and returns a shortlist
   of idea files with one line each on why they fit.
2. Open only the 2-5 shortlisted idea files.
3. Prefer `status: current`. If an idea is `superseded`, follow `superseded_by` to his newer view.
4. Ideas marked "Anthropic period" date from after he joined Anthropic (2026-05-19) and concern
   Claude or Anthropic; mention that when you rely on them.
5. Turn the Apply steps into concrete actions for the user's situation. Cite each idea by title
   and source link.
6. Do not reproduce his words beyond the quote in the file; link to the source.
