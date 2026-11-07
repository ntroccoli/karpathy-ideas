---
title: Convert books and PDFs with an agent, in chunks
date: 2026-04-02
source: x
url: https://x.com/karpathy/status/2039823314982744522
also: [https://x.com/karpathy/status/2040451573881737480, https://x.com/karpathy/status/2042292197287215230, https://x.com/karpathy/status/2042296221138894876]
themes: [output-and-reading, knowledge-management]
summary: For good results with long documents, use EPUB over PDF, convert with an agent, and summarise chapter by chapter with book context.
status: current
superseded_by:
anthropic: false
---

# Convert books and PDFs with an agent, in chunks

Attaching a PDF and asking for a summary gives weak results, says Karpathy. He gets very good
results by working in stages. Use EPUB, not PDF. Convert it to text or markdown. Summarise the
Wikipedia article on the book into a "book context". Then, with that context loaded, summarise one
chapter at a time. For the conversion step, he found that the best tool is to ask your agent: EPUB
files vary a lot, and an agent can inspect one, write the output and check that it looks right.
PDF conversion is harder. A popular converter failed badly on a 245-page model report, and he
thinks it must be a skill run by a strong LLM, not a fixed program.

## In his words

> "Converting pdfs is really hard"
> — Andrej Karpathy, 2026-04-09

## Apply

- Prefer EPUB or HTML sources. Ask the agent: "Convert this EPUB to markdown, one file per
  chapter, and check the result."
- Create a short context file about the book or paper first, then process chapter by chapter.
- For PDFs with figures and tables, test the converter on a hard page before you trust it.

## Context

- Replies in the thread on his [knowledge bases](2026-04-02-llm-knowledge-bases.md). He called
  reliable PDF-to-markdown a basic piece of infrastructure that is still missing and asked for examples.
