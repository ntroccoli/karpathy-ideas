---
title: LLM judges grade too freely and recognise who wrote the text
date: 2025-12-10
source: hn
url: https://news.ycombinator.com/item?id=46222634
also: []
themes: [llm-psychology, verification]
summary: Grading old HN threads, the model gave grades too easily and was biased by author names, and prompt tuning helped only a little.
status: current
superseded_by:
anthropic: false
---

# LLM judges grade too freely and recognise who wrote the text

Karpathy used an LLM to grade ten-year-old Hacker News comments with hindsight. Two flaws showed
up. The model gave good or bad grades to comments that made no strong prediction, if they were
good or bad in a broader sense. It also recognised usernames well, and its grades seemed biased by
who the author was. He tuned the prompt to fix the easy mistakes and thinks more iteration is
possible.

## Apply

- Remove names and other identity clues from the text before an LLM judge reads it.
- Tell the judge exactly what qualifies for a grade, such as "only score explicit predictions".
- Spot-check a sample of grades by hand, and keep the failures as test cases for the prompt.

## Context

- A reply on the Hacker News thread of his December 2025 hindsight-grading project.
- Related: [Software 2.0 automates what you can verify](2025-11-17-software-2-automates-what-you-can-verify.md).
