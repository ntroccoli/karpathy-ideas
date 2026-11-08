# Karpathy Ideas

> Unofficial, curated notes on Andrej Karpathy's public ideas about LLMs and AI agents, for people and LLM agents.

**Not affiliated with or endorsed by Andrej Karpathy.** Summaries are in our own words. Each one
links to the original source. Quotes are short, attributed, and remain the author's.

[![CI](https://github.com/ntroccoli/karpathy-ideas/actions/workflows/ci.yml/badge.svg)](https://github.com/ntroccoli/karpathy-ideas/actions/workflows/ci.yml)
[![Content: CC BY 4.0](https://img.shields.io/badge/content-CC%20BY%204.0-lightgrey.svg)](LICENSE-CONTENT.md)
[![Code: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE)

## Contents

- [What this is](#what-this-is)
- [Browse](#browse)
- [Use this with an LLM](#use-this-with-an-llm)
- [How it is maintained](#how-it-is-maintained)
- [Contributing](#contributing)
- [Legal](#legal)
- [License](#license)
- [Cite](#cite)

## What this is

Andrej Karpathy shares many practical ideas about working with LLMs: on X, on his blogs, in his
GitHub repositories and in talks. They are spread across hundreds of posts, and his views change
as models improve. This repository collects them in one place, one idea per file, so that both
people and LLM agents can find and apply them.

Each idea file has:

- the **date** and a **link** to the original source,
- a **summary** in our own words,
- at most **one short quote** (15 words or fewer),
- **Apply** steps you can use today,
- a **status**: `current`, or `superseded` with a link to his newer view.

Example: [Give agents success criteria, not steps](ideas/2026-01-26-success-criteria-not-steps.md).

## Browse

- [checklist.md](checklist.md): 16 questions to ask about your project, each linked to the ideas behind it.
- [index.md](index.md): every idea, newest first, with a one-line summary.
- [themes/](themes/): ideas grouped by topic, for example
  [agentic-coding](themes/agentic-coding.md), [verification](themes/verification.md) and
  [context-and-prompting](themes/context-and-prompting.md).
- [log.md](log.md): what each update collected, and when.

## Use this with an LLM

The repository is designed to be read by LLM agents at low token cost: a small index first, then
only the files that matter.

### Apply it to your project

Open a session of your coding agent (Claude Code, Codex, Cursor, …) in your project.

**Step 1: get proposals.** Paste:

```text
Read https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/llms.txt and follow it. Study this project, then propose which ideas to apply here: to the product, to how it is built, and to how agents work in it (instruction files, skills, session length, token use). Number each proposal, and for each give: the idea and its link, what the project already does, the change, the cost (S, M or L), and a recommendation of exactly one word: do, later or skip. Change nothing until I choose.
```

**Step 2: apply them.** Read the proposals. To accept the agent's recommendations, paste:

```text
Apply the proposals you marked "do". Before you change anything, list each one with "Done when": the checks that will prove it. Then apply them in order and run each one's checks. Before you change a file outside this project (user-level instructions, skills or settings), show me the exact text and wait for my yes. At the end, report each proposal with each check: pass or fail, and the result. Record each proposal and its outcome (applied, later, skipped) with the date in the project's docs, for example docs/karpathy-ideas.md, and mark each applied item "proven" or "waiting for first use", with the event that will prove it.
```

To choose yourself, name the numbers instead, for example "Apply 1, 3 and 5. Before you change anything, …".

**Step 3: revisit later.** When the collection has grown or some time has passed, paste:

```text
Read https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/llms.txt and follow it, including log.md for what changed since the date in docs/karpathy-ideas.md. Using the checklist, first check the items marked "waiting for first use", then propose only new ideas and earlier "later" items now worth doing, in the checklist's report format, then update docs/karpathy-ideas.md. Change nothing else until I choose.
```

The record file keeps each project's history, so a revisit reads only what is new.
Tip: a fresh session costs fewer tokens than a long-running one.

### Other ways

- **Any LLM that can fetch URLs:** give it
  `https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/llms.txt` and your question.
  Example prompt: *"Read this llms.txt, then the index. Which ideas apply to my project (describe
  it), and what are the first three steps?"*
- **An LLM that cannot browse:** upload or paste
  [llms-full.txt](llms-full.txt), which holds every idea in one file.
- **Claude Code:** clone the repository and run `claude` inside it. The skill in
  [.claude/skills/karpathy-ideas](.claude/skills/karpathy-ideas/SKILL.md) loads automatically. To
  use it in other projects, copy that folder to `~/.claude/skills/`.
- **Other coding agents:** [AGENTS.md](AGENTS.md) explains the file format and how to read the
  collection.

To save tokens, `llms.txt` tells agents to read only the matching theme pages and, when they
can, to let a smaller, cheaper model or subagent find the relevant ideas, so the main model reads
only a short list. Agents should link to the source rather than reproduce more of the original
text.

## How it is maintained

The collection is maintained by its author with [Claude Code](https://claude.com/claude-code).
An update runs about once a month: it collects new public posts, writes or updates idea files,
marks ideas he has revised as superseded, and records the run in [log.md](log.md). Commits made
with Claude keep a `Co-Authored-By` trailer. A human reviews the result before it is published.

Scripts in [scripts/](scripts/) build the index, theme pages and `llms.txt` files, and validate
every idea file. CI runs the validator, a Markdown linter, a link checker and a commit message
check.

## Contributing

Corrections are welcome: a wrong date, a broken link, a summary that misreads the source. Please
open an issue. See [CONTRIBUTING.md](CONTRIBUTING.md) and the
[Code of Conduct](CODE_OF_CONDUCT.md).

## Legal

This is an independent, unofficial project. Andrej Karpathy's name is used only to describe the
subject of the notes. Quoted excerpts belong to their author and are used for commentary with
attribution. If you are the author or a rights holder and want something changed or removed,
open an issue or a private report, and it will be handled promptly. See [NOTICE.md](NOTICE.md).

## License

- Text written for this repository (summaries, Apply steps, theme pages): [CC BY 4.0](LICENSE-CONTENT.md).
- Scripts and skills: [MIT](LICENSE).
- Quoted excerpts are not covered by either license. See [NOTICE.md](NOTICE.md).

## Cite

See [CITATION.cff](CITATION.cff), or use the "Cite this repository" button on GitHub.
