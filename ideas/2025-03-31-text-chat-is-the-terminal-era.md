---
title: Text chat is the terminal era; ask for visual output
date: 2025-03-31
source: x
url: https://x.com/karpathy/status/1906701941146624039
also: [https://x.com/karpathy/status/1935779463536755062, https://x.com/karpathy/status/1992657223785586864, https://karpathy.bearblog.dev/year-in-review-2025/, https://x.com/karpathy/status/2053872850101285137, https://x.com/karpathy/status/1878896895839642040, https://x.com/karpathy/status/1917920257257459899, https://x.com/karpathy/status/1917925145110626675, https://x.com/karpathy/status/1992655330002817095, https://x.com/karpathy/status/1992621704145953005]
themes: [output-and-reading, agent-native-software]
summary: Chat with a model is like typing at a 1980s console; people take in images, layouts and HTML faster, so ask models to answer visually.
status: current
superseded_by:
anthropic: false
kind: practice
---

# Text chat is the terminal era; ask for visual output

Karpathy says text chat is like the command terminal era of computing. A correct answer is closer
to a custom web app made for each query: spatial, visual and interactive. Computing solved the
console problem with the GUI, and LLMs need the same step: answers as images, infographics,
slides, whiteboards, animations and small web apps. In his 2025 review he called Google's Nano
Banana a first hint of an LLM GUI, because text, images and world knowledge share one set of
weights. In May 2026 he put it as input and output channels. Audio is the best way for people to
talk to an AI, but vision is the best way for an AI to talk back, since much of the brain
processes images. He sees a ladder: raw text, markdown (today's default), HTML (already a good
default), and later interactive video made by a diffusion model.

## In his words

> "People actually dislike reading text - it is slow and effortful."
> — Andrej Karpathy, 2025-12-19

## Apply

- End a prompt with "Structure your response as HTML", then open the saved file in a browser.
- Ask for a diagram, table, chart or infographic when a text answer gets long.
- For a one-off task, ask for a throwaway UI, not a long list of command flags.
- Try "Present this as a slideshow" for material you must explain to other people.
- Keep the HTML file in your project as the readable record of long research results.

## Context

- Posts of 2025-03-31, 2025-06-19 (a demo that builds a UI per task, which he still called a
  horseless carriage) and 2025-11-23 (the GUI as an intelligent canvas); the sixth item of his 2025
  review; and a post of 2026-05-11 that quoted an article on HTML output in Claude Code. In 2026 he
  also wanted better input: pointing at things on screen, as with a person beside you.
- Next step: [Make model output easier to understand](2026-10-02-make-model-outputs-easy-to-understand.md).
- Related: [LLMs are like 1960s operating systems](2025-06-17-llms-are-1960s-operating-systems.md)
  and [Code is now free, custom and disposable](2025-12-19-code-is-free-and-ephemeral.md).
- He already used the punchcard image for prompt-and-paste chat in January 2025.
- In May 2025 he expected the GUI to be visual, generated for each prompt, and built mostly from procedural parts such as charts and components, because some content, such as a map, must be exact.
- In November 2025 he tried an image model that reasons, as a first sign of this GUI: see [Plan in text first, then illustrate](2025-11-23-plan-in-text-then-illustrate-with-an-image-model.md).
