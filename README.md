# Karpathy Ideas

> Let your coding agent check your project against Andrej Karpathy's ideas on working with LLMs and agents.

**Unofficial. Not affiliated with or endorsed by Andrej Karpathy.** Summaries are in our own
words. Each one links to the original source. Quotes are short, attributed, and belong to Karpathy.

[![CI](https://github.com/ntroccoli/karpathy-ideas/actions/workflows/ci.yml/badge.svg)](https://github.com/ntroccoli/karpathy-ideas/actions/workflows/ci.yml)
[![Content: CC BY 4.0](https://img.shields.io/badge/content-CC%20BY%204.0-lightgrey.svg)](LICENSE-CONTENT.md)
[![Code: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE)

## Try it

Open your coding agent (Claude Code, Codex, Cursor, …) in your project. Step 1 only reads your
project and changes nothing. You get numbered proposals, each with the idea, its source, a cost
and a recommendation, and you choose what happens next. Steps 2 and 3 are optional.

> **Example proposal**, from this repository's own review:
> **2. Dependencies (checklist B6).** Idea: [rethink dependencies](ideas/2026-03-24-rethink-dependencies-supply-chain.md).
> Today: the check script runs a Markdown linter without a version, so it fetches the newest
> release on every run. Change: pin exact versions. Cost: S. Recommendation: do.

### Step 1: get proposals

```text
Read https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/llms.txt and follow it. Study this project and measure every checklist question; do not judge from memory. Then propose which ideas to apply here: to the product, to how it is built, and to how agents work in it (instruction files, skills, session length, token use). Number each proposal, and for each give: the idea and its link, what the project already does, the change, the cost (S, M or L), and a recommendation of exactly one word: do, later or skip. Change nothing until I choose.
```

### Step 2: apply them

Read the proposals. To accept the agent's recommendations, paste:

```text
Apply the proposals you marked "do". First list each one with "Done when:" and the checks that prove it. Then apply them in order and run each one's checks. Before you change a file outside this project (user-level instructions, skills or settings), show me the exact text and wait for my yes. Then report each proposal with each check: pass or fail, and the result. Write the record in docs/karpathy-ideas.md: for every proposal, including later and skipped ones, give the date and the outcome (applied, later or skipped). Mark each applied item "proven" or "waiting for first use", with the event that will prove it. Name the newest entry (date and title) in https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/log.md that this review covered.
```

To choose yourself, replace the first sentence with "Apply proposals 1, 3 and 5."

### Step 3: revisit later

When the collection has grown or some time has passed, paste:

```text
Read https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/llms.txt and follow it. Read docs/karpathy-ideas.md. Then read the entries in https://raw.githubusercontent.com/ntroccoli/karpathy-ideas/main/log.md that are newer than the last entry the record names (if it names none, newer than its date); each entry's "Checklist impact" part says which questions its new ideas touch. Re-check the items marked "waiting for first use" and the applied items that may have stopped holding. Mark each "proven", "still waiting", "stopped holding" or "not shown" (the proof cannot be run yet), and give the numbers. Then measure every checklist question; do not judge from memory. Report every gap. Propose only ideas new since the last revisit, earlier "later" items, and applied items that stopped holding; give other gaps one line each. Use the checklist's report format. Update docs/karpathy-ideas.md in its existing layout and name in it the newest log.md entry you read. Change nothing else until I choose.
```

The record file, `docs/karpathy-ideas.md`, keeps each project's history, so a revisit reads only
what is new. Tip: run step 1 and each revisit in a fresh session, not in the one that built the
project. It judges from the files instead of from memory, and it costs fewer tokens than a
long-running session.

## Why

Andrej Karpathy was a founding member of OpenAI, Director of AI at Tesla (2017-2022) and the
teacher of Stanford's CS231n ([Wikipedia](https://en.wikipedia.org/wiki/Andrej_Karpathy)). He
named [Software 2.0](https://karpathy.medium.com/software-2-0-a64152b37c35) and
[vibe coding](ideas/2025-02-02-vibe-coding-for-throwaway-projects.md), framed
[Software 3.0](ideas/2025-06-17-software-3-0-english-as-programs.md), and wrote nanoGPT, nanochat
and autoresearch. He shares practical advice on agents across hundreds of posts, talks and
repositories, and it changes as models improve. Few people can follow all of it, and fewer apply
it. This repository collects it in one place, one idea per file, for people and coding agents.

## What's inside

- **[A project checklist](checklist.md):** 17 questions about agent setup, how you build, and
  your product, each linked to the ideas behind it. Your agent measures first, then proposes.
- **Over 200 ideas, one per file:** every idea newest first in [index.md](index.md), or by topic
  in [themes/](themes/), for example [agentic-coding](themes/agentic-coding.md),
  [verification](themes/verification.md) and [context-and-prompting](themes/context-and-prompting.md).
- **Views kept current:** when he changes his mind, the older idea links to the newer one.
- **Cheap for agents:** `llms.txt` and the theme pages let an agent read only what it needs.
- **[log.md](log.md):** what each update collected, and when.

### How an idea file looks

Each idea file has:

- the **date** and a **link** to the original source,
- a **summary** in our own words,
- at most **one short quote** (15 words or fewer),
- a **kind**: `practice` (a way of working) or `view` (his opinion or explanation),
- **Apply** steps you can use today (every practice has them; a view only when they are concrete).
  They are our translation of his idea into practice, not his words: the summary and the quote
  say what he said. A step marked "Our reading" or "our addition" goes further than the
  idea itself; when all steps do, one "Our reading" line at the top of Apply says so,
- a **status**: `current`, or `superseded` with a link to his newer view.

Example: [Give agents success criteria, not steps](ideas/2026-01-26-success-criteria-not-steps.md).

Ideas marked *(Anthropic period)* are dated 2026-05-19 or later, after he
[joined Anthropic](https://x.com/karpathy/status/2056753169888334312), and are about Claude or
Anthropic. Weigh them with that in mind.

## Other ways to use it

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
