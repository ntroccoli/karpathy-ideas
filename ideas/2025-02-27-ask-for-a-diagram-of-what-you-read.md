---
title: Ask the model for a conceptual diagram of what you read
date: 2025-02-27
source: talk
url: https://www.youtube.com/watch?v=EWvNQjAaOHw
also: []
themes: [output-and-reading, learning-and-education]
summary: Ask for a conceptual diagram of a chapter or code; the model writes Mermaid code that renders as a tree you can remember.
status: current
superseded_by:
anthropic: false
---

# Ask the model for a conceptual diagram of what you read

Karpathy likes to see the layout of an argument. After he loads a chapter, he asks for a
conceptual diagram of the whole chapter. The model often writes Mermaid code, and the app draws it
as a tree. The tree shows the main principle and its parts. He says the spatial layout helps
him remember the chapter. The same request works for books, chapters, source code and other
material. In his demo, the app that draws the result is Claude with its artifacts feature. It is
the one artifacts use he finds useful in daily work.

## Apply

- After a summary, send: "Create a conceptual diagram of this chapter" and attach the text.
- If the app does not render Mermaid, paste the code into a Mermaid viewer.
- Use it on code too: "Draw a diagram of how these modules call each other."
- Check the diagram against the text. It shows what the model understood, which may be wrong.

## Context

- From *How I use LLMs* (2025-02).
- Related: [Read books and papers together with an LLM](2024-12-11-read-books-with-an-llm.md).
