---
title: Break the shared LLM house voice with a style guide
date: 2024-10-06
source: x
url: https://x.com/karpathy/status/1843005000206909856
also: [https://x.com/karpathy/status/1925712637800669472, https://x.com/karpathy/status/1935404600653492484, https://x.com/karpathy/status/1949473018683469992, https://x.com/karpathy/status/1961079942189638119]
themes: [output-and-reading]
summary: Models overuse lists, 'multifaceted' and offers of help, all at the same length; an explicit style guide changes that.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Break the shared LLM house voice with a style guide

Karpathy is puzzled that all LLMs sound alike. They overuse lists and words like multifaceted, they offer help too often, and their answers have the same length. This house voice comes from shared training habits. Our reading: you can change it with explicit instructions on length, format and tone.

## Apply

- Add a short style guide to the system prompt or instruction file: length, tone and format.
- List constructions to avoid, such as stock phrases and lists of three.
- Give one example of the voice you want.

## Context

- Posted 2024-10-06.
- In May 2025 he called the convergence of models eerie: not fully true, but true to a surprising degree. In June 2025 he showed five chatbots that all answered 27 when asked to guess a number from 1 to 50.
- In July 2025, after many models gave a science-fiction hero the same name, he wondered if subliminal learning during distillation plays a part, and guessed that more LLM text on the web could pull models toward a shared fixed point. Similar training sets are a simpler cause.
- In August 2025 he guessed why finetuning did not make models differ: it is short and carries few bits, so it mostly moves style on a shared pretrained base. RL, with many more bits over a much longer run, might separate models more.
