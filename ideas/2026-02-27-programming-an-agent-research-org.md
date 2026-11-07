---
title: You now program an organisation of agents
date: 2026-02-27
source: x
url: https://x.com/karpathy/status/2027521323275325622
also: [https://x.com/karpathy/status/2019851952033771710, https://podcasts.apple.com/us/podcast/no-priors-artificial-intelligence-technology-startups/id1668002688?i=1000756334966]
themes: [verification, research-and-training, agentic-coding]
summary: An agent research org is its prompts, skills, tools and routines, kept as markdown you can version, compare and tune; its own research ideas are still weak.
status: current
superseded_by:
anthropic: false
---

# You now program an organisation of agents

Karpathy ran 8 agents (4 Claude, 4 Codex), one GPU each, on nanochat experiments. Setups included
8 solo researchers and a "chief scientist" with 8 juniors. Each program was a git branch, each
agent used a worktree, files carried messages, and sessions ran in a tmux grid. The ideas were
poor. Agents skipped strong baselines, ablations and control of runtime and FLOPs; one "found"
that a bigger network gives lower loss. They implement a well-described idea well but do not
generate good ones. His frame: the source code is now the org itself, meaning prompts, skills,
tools and routines such as a daily standup. In March he extended it. Because the org is a set of
markdown files, you can run several versions on the same hardware, compare their progress, and
ask a model to write a better file. He calls this the meta layer.

## In his words

> "you are now programming an organization"
> — Andrej Karpathy, 2026-02-27

## Apply

- Keep agent roles and process rules in versioned markdown files, not in chat history.
- Give each agent its own git branch and worktree. Use plain files for messages.
- State the rules of valid experiments in the prompt: a baseline, one change at a time, equal
  compute.
- Run two versions of the instruction file on the same task and budget, compare the metric, and
  give the logs to a model to propose the next change.
- Add one layer at a time (model, agent, many agents, instructions, tuning of instructions). Each
  layer is hard to debug when the one below is not stable.

## Context

- Reply to Thomas Wolf about automating the NanoGPT speedrun. On 2026-02-06 he wrote that agents
  had failed twice at open-ended nanochat work and do not flag side effects; see
  [Coding agents make subtle conceptual mistakes](2026-01-26-coding-agents-make-subtle-conceptual-mistakes.md).
- The markdown-files extension is from the No Priors episode of 2026-03-20. He says it works only
  where results can be measured.
- What came next: [Autoresearch](2026-03-07-autoresearch-loop.md), its brief
  [program.md](2026-03-06-program-md-is-the-research-org.md),
  [a chief scientist for open-ended research](2026-03-08-cagy-models-and-chief-scientist.md) and
  [a research community of agents](2026-03-08-agent-research-community.md).
