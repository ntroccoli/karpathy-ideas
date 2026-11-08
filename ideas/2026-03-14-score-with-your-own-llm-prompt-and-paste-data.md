---
title: Score data with an LLM rubric and ship it as one prompt
date: 2026-03-14
source: github
url: https://github.com/karpathy/jobs
also: [https://karpathy.ai/jobs/]
themes: [ai-progress, output-and-reading]
summary: His jobs repo scores 342 occupations for AI exposure with an LLM rubric, lets you swap in your own prompt, and packs all data into one file for chat.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Score data with an LLM rubric and ship it as one prompt

The jobs repo takes the US Bureau of Labor Statistics handbook (342 occupations) and builds a
treemap. Rectangle area shows employment. Colour shows a chosen metric, including "AI exposure",
a 0 to 10 score from an LLM with a written rationale. The scoring prompt is the point: you can
write a different question (humanoid robots, offshoring) and re-run. The scoring rubric gives
anchor examples for each band. He warns that the score does not predict job loss, because demand
and rules also matter. A second file, `prompt.md`, holds all data in about 45K tokens, so you can
paste it into a chat and discuss it with no code.

## Apply

- Score items with a rubric that has calibration anchors per band, and store the rationale
  next to each score.
- Keep raw pages, clean markdown and results in separate folders, so you can re-run the scoring
  step cheaply.
- Generate one `prompt.md` with the data, the method and the caveats, for chat use.
- State what the score does not mean, in the README.

## Context

- Repository created 2026-03-14. Scores come from Gemini Flash via OpenRouter and are described
  as rough estimates. The README calls it a development tool, not a serious economic study.
