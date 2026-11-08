---
title: Text diffusion is a bidirectional transformer that re-masks a token canvas
date: 2025-10-20
source: x
url: https://x.com/karpathy/status/1980347971935068380
also: [https://x.com/karpathy/status/1981053985231687719, https://x.com/karpathy/status/1894923254864978091]
themes: [research-and-training]
summary: Without the maths, text diffusion is a bidirectional transformer that refreshes all tokens over noise steps; autoregression only appends.
status: current
superseded_by:
anthropic: false
kind: view
---

# Text diffusion is a bidirectional transformer that re-masks a token canvas

Karpathy points to a short post that shows how simple discrete text diffusion can be. Image and video models mostly use diffusion, while text models mostly use autoregression. Without the formalism, diffusion is an ordinary transformer with bidirectional attention. It repeatedly re-samples and re-masks all tokens of a "canvas" on a noise schedule until the last step. In code terms, autoregression appends one token and looks only backwards. Diffusion sets any position in the canvas and looks both ways. Bidirectional attention is stronger, but it makes training costlier because you cannot parallelise over the sequence. He thinks the two may blend, and calls this part of the stack still fungible.

## Context

- Post of 2025-10-20. A later reply describes a small character-level text diffusion model as text "boiling" down to a simmer.
- Related: [Pixels may be better LLM inputs than text tokens](2025-10-20-pixels-may-be-better-llm-inputs-than-text.md).
- First raised on [2025-02-27](https://x.com/karpathy/status/1894923254864978091): he called Mercury the first large diffusion LLM. Most LLMs are autoregressive and alike, so a diffusion model may have new strengths and weaknesses. He found it a puzzle that images and video use diffusion while text does not.
