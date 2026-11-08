---
title: Pack your project into one prompt for a quick, scoped question
date: 2025-02-14
source: x
url: https://x.com/karpathy/status/1890208670732124372
also: [https://x.com/karpathy/status/1954227464596832670]
themes: [context-and-prompting, agentic-coding]
summary: When coding agents over-explore, bundle a small repo into one prompt, start a new chat, ask one question at the end and pick the model yourself.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Pack your project into one prompt for a quick, scoped question

In February 2025 Karpathy asked more apps to offer an "Export for prompt" button, after a trick
that turns a GitHub repo URL into a gitingest URL to get the whole repo as one text. In August he
described his own routine. When agents search the whole repo and think for minutes, he sometimes
skips them. He runs a script that packs all project files into one text with the tool
`files-to-prompt`. He opens a new chat, pastes the text, asks one question at the end, and chooses
the model by hand. This works because his project is small enough to fit in the context.

## Apply

- Keep a script that bundles your files into one text file (`files-to-prompt .` or gitingest).
- Start a new chat per question, paste the bundle, and put the question last.
- Choose the model yourself: a fast one for spot checks, a strong one for hard bugs.
- Check the bundle size first; if it does not fit, send only the folders that matter.

## Context

- Quote post of 2025-02-14 about gitingest, then a
  [reply of 2025-08-09](https://x.com/karpathy/status/1954227464596832670) in a thread about agents
  that are too eager. Works only for repos that fit the context window.
- Related: [Models are too agentic: state the stakes and scope](2025-08-09-models-too-agentic-state-stakes-and-scope.md).
- His later tool for the same job: [Flatten a repository into one page for humans and LLMs](2025-08-20-render-repo-for-humans-and-llms.md).
