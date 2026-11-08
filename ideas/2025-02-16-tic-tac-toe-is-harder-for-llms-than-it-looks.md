---
title: Tic-tac-toe is harder for LLMs than it looks
date: 2025-02-16
source: x
url: https://x.com/karpathy/status/1916470365460512898
also: [https://x.com/karpathy/status/1916495940049047819, https://x.com/karpathy/status/1891204392277151749, https://x.com/karpathy/status/1891555738394279976, https://x.com/karpathy/status/1891720635363254772]
themes: [llm-psychology]
summary: Models fail at tic-tac-toe because it needs line checks and look-ahead that humans do with their eyes and a sheet of paper.
status: current
superseded_by:
anthropic: false
kind: view
---

# Tic-tac-toe is harder for LLMs than it looks

Someone asked why models cannot play Pokémon well. He answered that they cannot even play tic-tac-toe, so something deeper is going on. In a follow-up he said the game is secretly hard for a text model. There are eight lines to check, and each check is a tricky indexing step. To play well you must also roll the game forward a few moves. Humans find it easy because they see the board and use the paper to keep track. A text-only 1D version is much harder, since you must do it all in your head.

## In his words

> "tic tac toe is secretly relatively hard"
> — Andrej Karpathy, 2025-04-27

## Apply

- When a model fails a task that looks trivial, ask what tool a human uses for it (sight, paper, a board). Give the model an equivalent: a rendered board, a scratchpad, or code.

## Context

- April 2025. He asked the author of a tic-tac-toe benchmark to re-run it.
- Related: [jagged intelligence follows verifiability](2026-03-20-jagged-intelligence-follows-verifiability.md).
- First raised on 2025-02-16: he called tic-tac-toe the most interesting failure among games.
- In his Grok 3 test of 2025-02-18, the model solved the boards he gave it but failed when asked to invent tricky boards, and so did o1-pro.
