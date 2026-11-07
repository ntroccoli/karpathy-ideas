---
title: Ask the model to write a small app just for you
date: 2025-02-27
source: talk
url: https://www.youtube.com/watch?v=EWvNQjAaOHw
also: []
themes: [agent-native-software]
summary: Instead of finding an app, have the model write a tiny local one, such as a flashcard quiz, and run it in the chat.
status: current
superseded_by:
anthropic: false
---

# Ask the model to write a small app just for you

In the video, Karpathy asks Claude for 20 flashcards from a text. Then he asks it to use the
artifacts feature to write an app that quizzes him on them. The model writes a small React app
and the interface runs it in the browser. It has no backend or database. He calls this a different
paradigm. Usually engineers ship one app for everyone, with a few settings. Here the model writes
the app for one person. He adds that he is not a daily user of this and uses it now and then.

## Apply

- Ask for the content first (cards, a checklist, a table). Then ask for a tiny app that uses it.
- Keep the request to one screen and one job. Single-file, local apps work best.
- Ask the model to keep the data inside the page, so you can copy it out later.

## Context

- From *How I use LLMs* (2025-02). An early view of a theme he develops later in 2026: software
  written on demand, with agents as the user. See
  [Apps become APIs and agents are the glue](2026-03-20-apps-become-apis-agents-are-glue.md).
