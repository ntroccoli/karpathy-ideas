---
title: Read books together with an LLM, one chapter at a time
date: 2024-12-11
source: x
url: https://x.com/karpathy/status/1866896395363553418
also: [https://www.youtube.com/watch?v=EWvNQjAaOHw, https://github.com/karpathy/reader3, https://x.com/karpathy/status/2010409356874203466, https://x.com/karpathy/status/1886200943471157418, https://x.com/karpathy/status/1969699013671678382]
themes: [learning-and-education, output-and-reading]
summary: Paste one chapter at a time into an LLM, ask for a summary, then read it yourself and ask questions; EPUB parses cleanly, so prefer it to PDF.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Read books together with an LLM, one chapter at a time

Karpathy rarely reads a book alone now. In December 2024 he called reading together with an LLM
one of his favourite uses, and said an AI-native reader app would be a hit. In early 2025 he
showed the habit. He pastes the raw text of a chapter into the chat and asks for a summary, so he
knows its shape. Then he reads the chapter himself and asks a question whenever something is
unclear. The model may know the book in general but not recall the chapter, so the text goes into
the context window. He says this helps most with papers from other fields and with old texts. In
November 2025 he released reader3, a small self-hosted EPUB reader that shows one chapter at a time
for easy copying. He prefers EPUB to PDF because code can parse it into clean text.

## In his words

> "And don't read books alone."
> — Andrej Karpathy, 2025-02-27

## Apply

- Get the book as EPUB (Project Gutenberg has many) and convert it to text with reader3 or a small
  parser.
- Paste one chapter into a new chat. Name the book. Ask: "Summarise this chapter."
- Read the real chapter alongside. Ask short questions where you stall, or ask for context and
  objections.
- Use one chat per chapter so the window stays small and the discussion stays on topic.
- For a paper, upload the PDF and ask for a summary first. Figures may be lost in conversion.

## Context

- X post of 2024-12-11; *How I use LLMs* video of 2025-02-27 (examples: a 1776 economics book and a
  genome-model paper); reader3 repository of 2025-11-18, about 90% vibe coded; a reply of
  2026-01-11 that pointed to reader3.
- In early 2025 he found the workflow clunky: no tool let him highlight a passage and ask about it.
- Related: [Read with an LLM in three passes](2025-11-17-read-everything-with-llms-three-passes.md),
  [Convert books and PDFs with an agent](2026-04-02-convert-documents-with-an-agent.md),
  [Ask for a diagram of what you read](2025-02-27-ask-for-a-diagram-of-what-you-read.md) and
  [Treat small apps as disposable](2025-11-18-disposable-vibe-coded-apps.md).
- In February 2025 he vibe coded a reader for The Wealth of Nations: click a paragraph, ask a question, and the app sends the chapter, the paragraph and the question to an LLM.
- In September 2025 he said a book works better as a set of prompts that start your own questions, explanations and examples, like synthetic data generation for a model, than as text to absorb, like pretraining data.
