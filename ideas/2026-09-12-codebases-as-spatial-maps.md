---
title: Show big codebases as spatial maps, not file lists
date: 2026-09-12
source: x
url: https://x.com/karpathy/status/2098781917076504752
also: [https://x.com/karpathy/status/2098777547265950015]
themes: [output-and-reading, agentic-coding]
summary: Large software is an invisible structure; code explorers could cluster modules in space and show public interfaces, private parts and live diffs.
status: current
superseded_by:
anthropic: false
---

# Show big codebases as spatial maps, not file lists

Someone built a 120 Hz explorer for a 2.5-million-line codebase. Karpathy replies that he sees large
projects such as Linux as digital megastructures, but you cannot see them. An office looks like
people staring at screens. For an explorer he suggests 3D, or at least 2D with modules grouped in
space. Insides would show private code and data, boundaries would show public interfaces and
their call sites, and collaborators would zoom around and cast diffs.

## Apply

- Ask an agent to generate an HTML map of your repo: modules as boxes, public APIs on the edges.
- Colour the map by recent change, test failures or owner to find where to look.
- Use such a map when you review a large agent-made change.

## Context

- Two replies from September 2026. Related: [Work rises into oversight](2026-10-02-oversight-and-discardable-software.md).
