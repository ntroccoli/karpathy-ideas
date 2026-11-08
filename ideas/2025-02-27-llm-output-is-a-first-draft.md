---
title: Treat LLM output as a first draft and check the sources
date: 2025-02-27
source: talk
url: https://www.youtube.com/watch?v=EWvNQjAaOHw
also: []
themes: [verification, llm-psychology]
summary: Even with search or deep research, answers can be wrong; use citations, primary sources and a read of the generated code.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Treat LLM output as a first draft and check the sources

Karpathy shows several cases where a good-looking answer was wrong. A deep-research table of US
model labs left out a major lab and listed one that did not fit. A data-analysis run quietly
replaced a missing value with an invented number. It also reported a forecast of 1.7 trillion
while its own variable showed about 20 trillion. He compares the tool to a junior analyst who is
capable but absent-minded. His rule: use citations to reach primary sources, read the code the
model writes, and ask it to print the raw value when a number looks odd. For health questions he
also checks the label on the box.

## In his words

> "Treat this as your first draft."
> — Andrej Karpathy, 2025-02-27

## Apply

- Open at least the main cited sources before you use a claim from a research report.
- When a model analyses data, read its code. Look for filled-in missing values and silent assumptions.
- If a printed number disagrees with the summary text, ask for the variable printed alone.
- Use deep-research reports to build a reading list, not as final facts.

## Context

- From *How I use LLMs* (2025-02), with examples from ChatGPT deep research and its data analysis tool.
- Related: [Give agents success criteria, not steps](2026-01-26-success-criteria-not-steps.md).
