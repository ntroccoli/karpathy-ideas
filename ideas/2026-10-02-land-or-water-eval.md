---
title: Test a model by asking if coordinates are land or water
date: 2026-10-02
source: x
url: https://x.com/karpathy/status/2105909609487872075
also: [https://x.com/karpathy/status/2105912048668590090]
themes: [llm-psychology, verification]
summary: Ask a model many times whether a latitude and longitude is land or water and plot the answers, and it draws the world from text alone.
status: current
superseded_by:
anthropic: true
---

# Test a model by asking if coordinates are land or water

Karpathy shared a cheap eval made by another user. Give a model a latitude and longitude as text
and ask "Land or Water?". Repeat for 16,200 points, one every two degrees, and draw the answers
as an image. No images or tools are involved. In the shared chart, older Claude models draw noisy
blobs and newer ones draw clean continents, with accuracy rising from about 60% to about 99%.
In a reply he stresses the point: the image comes only from reading text and predicting text. The
only image is how the answers are placed in 2D.

## Apply

- Build small, cheap evals that you can plot, so you see change between model versions at a glance.
- Use a probe with a known answer key (here, a land mask) so you can score it automatically.
- Remember that models hold more world knowledge in text form than they show in normal chat.

## Context

- The chart covered twelve Claude models. Our reading: it is also an easy way to compare models
  from one vendor over time. It is one probe, so do not read it as a general ranking.
- Related: [A huge creative test for models](2026-08-02-big-budget-creative-test-for-models.md).
