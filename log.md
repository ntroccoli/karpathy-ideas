# Sweep log

Each update of the collection: when it ran, the period of sources it covered, and what changed.
Newest first.

## 2026-11-09 — checklist and prompts from five project reviews (no new ideas)

- **Why:** fresh sessions reviewed five projects with the checklist and gave feedback. Reviews
  by the session that built a project had marked questions "no gap" that a fresh, measuring
  review found to be gaps (one to four per project).
- **Changed:** the README step 1 and step 3 prompts ask to measure every question and not to
  judge from memory, and step 3 also proposes applied items that stopped holding. The README tip
  says to review in a fresh session.
- **Checklist impact:** wording of the Checks for A1 (handoff and state files read at start;
  what the first reads add), A6 (a compiled page for an append-only log), B2 (count rules not
  followed), B3 (a headline number never measured), B8 (subagents included; no shell for an
  agent that reads web pages) and C2 (does not apply when the product runs no AI). The procedure
  part (ours) adds: review in a fresh session, the grade "partial gap", measuring from session
  logs, a sign of a gap for A2, and revisit rules. No new ideas. On a revisit, re-measure A1,
  A6, B2, B3, B8 and C2 with the new wording.

## 2026-11-08 — 2025 X sweep

- **Sources covered:** X posts and replies 2025-01-01 to 2025-12-31 (full sweep of the profile
  Posts and Replies tabs).
- **Added:** 46 ideas, among them evaluating models through games, invisible Unicode prompt
  injection, agent security, verification as the bottleneck, bacterial code, writing research
  for LLM readers, finetuning small models for one pipeline step, and synthetic tasks that teach
  a small model a skill. The collection now has 203 ideas (145 practice, 58 view).
- **Enriched:** 63 existing ideas got 2025 sources in `also`, Context lines or Apply steps.
  Where a 2025 post raised an idea earlier than its file date, the file keeps its name and gets
  a "First raised on" line.
- **Merged or dropped:** 8 drafts were merged into existing ideas (duplicates and thin views);
  3 were dropped as off-topic or too thin to use.
- **Superseded:** none. Possible changes of mind (vibe coding, RL as one layer among others)
  read as refinements; they are noted in Context.

### Ideas added in this sweep

Grouped by kind, then by main theme.

#### Practices

- agentic-coding: [Build a small app in a language you do not know, one chat step at a time](ideas/2025-03-23-build-an-app-in-a-language-you-do-not-know.md); [Write boring code with NASA-style rules](ideas/2025-04-06-write-boring-code-with-nasa-style-rules.md); [Write small, modular, copy-paste code like bacteria do](ideas/2025-07-05-write-code-like-bacteria.md); [Ask an LLM whether a library function exists, and give it docs for new tools](ideas/2025-11-25-ask-an-llm-if-a-function-exists.md)
- verification: [Evaluate models by making them play each other](ideas/2025-02-01-evaluate-models-by-making-them-play-games.md); [Leaderboards get gamed; watch real usage](ideas/2025-04-30-leaderboards-get-gamed-watch-real-usage.md); [Verification, not generation, is the bottleneck](ideas/2025-06-04-verification-not-generation-is-the-bottleneck.md); [Read a few cases in depth, not only dashboards](ideas/2025-07-14-study-a-few-cases-not-dashboards.md)
- context-and-prompting: [Pack your project into one prompt for a quick, scoped question](ideas/2025-02-14-package-repo-into-one-prompt.md); [For deep reading, put the whole text in the context window](ideas/2025-10-01-put-the-whole-text-in-context-not-rag.md)
- output-and-reading: [Write new knowledge for AI readers, not as a PDF](ideas/2025-07-10-write-research-for-llms-not-pdf.md); [Plan in text first, then ask an image model to illustrate, and re-roll](ideas/2025-11-23-plan-in-text-then-illustrate-with-an-image-model.md)
- agent-native-software: [Let an agent find your local devices and build a better control app](ideas/2025-12-28-let-an-agent-reverse-engineer-your-home-devices.md)
- security-and-dependencies: [Invisible Unicode characters can smuggle data and prompts into an LLM](ideas/2025-02-12-invisible-unicode-can-hide-prompts.md); [Agent security is the wild west](ideas/2025-06-16-agent-security-is-the-wild-west.md); [A quoted tilde is not expanded, so check an agent's delete commands](ideas/2025-08-31-quote-paths-and-check-agent-rm-commands.md); [Measure a project's weight with its lockfile, and rewrite heavy parts small](ideas/2025-10-14-count-dependencies-with-the-lockfile.md)
- learning-and-education: [Make a long from-scratch intro to your own field](ideas/2025-02-07-make-a-from-scratch-intro-in-your-own-field.md)
- research-and-training: [Finetune a small model to narrow the scope of one pipeline step](ideas/2025-10-01-finetune-small-model-for-narrow-scope.md); [Give a model an identity with synthetic conversations, and make them diverse](ideas/2025-10-21-give-a-small-model-an-identity-with-synthetic-data.md); [Teach a small model a skill with a synthetic task that spreads the reasoning](ideas/2025-10-24-teach-a-small-model-a-skill-with-a-synthetic-task.md); [Do not split train and test with positive and negative seeds](ideas/2025-12-09-do-not-split-train-and-test-with-seed-sign.md)

#### Views

- agent-native-software: [Building a web app is like assembling IKEA furniture; make it just work for AIs](ideas/2025-03-27-web-app-stack-is-ikea-furniture.md); [Either the automation adapts, or the world does](ideas/2025-06-05-automation-meets-the-task-or-the-task-meets-it.md)
- llm-psychology: [A good assistant skips the lecture and the flattery](ideas/2025-01-02-llm-personality-no-lectures-no-flattery.md); [Tic-tac-toe is harder for LLMs than it looks](ideas/2025-04-27-tic-tac-toe-is-harder-for-llms-than-it-looks.md); [When the prior overwhelms the likelihood](ideas/2025-06-11-when-the-prior-overwhelms-the-likelihood.md); [Slop is data that does not help a world model; it is regretted attention](ideas/2025-11-22-slop-is-regretted-attention.md)
- learning-and-education: [People may train their minds the way they go to the gym](ideas/2025-01-17-minds-like-muscles-and-the-gym.md); [Agency matters more than intelligence, and is scarcer](ideas/2025-02-24-agency-matters-more-than-intelligence.md); [Learn the physical lens of computing](ideas/2025-05-06-learn-the-physical-lens-of-computing.md)
- research-and-training: [Filtering synthetic data is crude reinforcement learning](ideas/2025-01-27-synthetic-data-and-rl-are-one-loop.md); [What is the best possible pretraining data?](ideas/2025-06-20-what-is-the-best-pretraining-data-stream.md); [The bitter lesson as "turn the crank"](ideas/2025-06-26-the-bitter-lesson-turn-the-crank.md); [Making a model know your own data is still research; use retrieval for now](ideas/2025-10-13-making-a-model-know-you-is-still-research.md); [Pixels may be better LLM inputs than text tokens](ideas/2025-10-20-pixels-may-be-better-llm-inputs-than-text.md); [Text diffusion is a bidirectional transformer that re-masks a token canvas](ideas/2025-10-20-text-diffusion-is-bidirectional-denoising.md)
- ai-progress: [Three breakthroughs so far; autonomous agents need a few more](ideas/2025-02-18-three-breakthroughs-more-leaps-needed.md); [Bigger pretraining improves everything a little, and is hard to point to](ideas/2025-02-27-bigger-pretraining-helps-everything-a-little.md); [Move AI predictions to betting markets](ideas/2025-04-04-move-ai-predictions-to-betting-markets.md); [Prompting was the unlock he missed in 2015](ideas/2025-05-25-prompting-was-the-unlock-he-missed.md); [Generated video can be optimised directly](ideas/2025-06-02-video-generation-is-directly-optimizable.md); [Recursive self-improvement has already begun](ideas/2025-06-30-recursive-self-improvement-is-already-underway.md); [AGI means a feature-complete remote worker; society-wide deployment is ASI](ideas/2025-10-21-agi-means-a-remote-worker-diffusion-is-asi.md); [A cheap AI shortcut can stop you before the deeper work](ideas/2025-11-10-cheap-shortcuts-stop-deeper-work.md); [One big neural net can replace a hand-written stack, if data and compute scale](ideas/2025-11-12-one-neural-net-replaces-the-handwritten-stack.md)

### Checklist impact

Changes to [checklist.md](checklist.md) with this sweep:

- **B8 (new):** "What may agents run and read?", built from agent security, invisible Unicode
  and quote rm paths.
- **B5:** new link to verification, not generation, is the bottleneck.
- **B6:** new link to count dependencies with the lockfile; the Check now says lockfile lines
  are a quick count.
- No other question changed (A1 kept its links).

Each added idea and the question it touches. "none: task-level" is a practice for one task,
not a project review; "none: view" is a view with no Check.

- **A3** (which model does which work): leaderboards get gamed; finetune a small model for
  narrow scope.
- **A4** (scope and depth): pack your project into one prompt.
- **A6** (knowledge readable by agents): put the whole text in context; write research for
  LLMs; ask an LLM if a function exists (keep library docs as markdown in the repo).
- **B3** (one number): read a few cases, not only dashboards.
- **B5** (human review): verification is the bottleneck; boring code with NASA-style rules.
- **B6** (dependencies): count dependencies with the lockfile; write code like bacteria.
- **B8** (what agents may run and read): invisible Unicode; agent security; quote rm paths.
- **C1** (can agents use it): web app stack is IKEA furniture (a view).
- **none: task-level** (8 practices): build an app in a language you do not know; evaluate
  models with games; plan in text, then illustrate; let an agent reverse-engineer home devices;
  a from-scratch intro to your field; give a small model an identity; teach a small model a
  skill with a synthetic task; do not split train and test by seed sign.
- **none: view** (the other 23 views): no lectures or flattery; minds like muscles; synthetic
  data and RL are one loop; three breakthroughs; agency over intelligence; bigger pretraining
  helps a little; tic-tac-toe is hard for LLMs; betting markets; physical lens of computing;
  prompting was the unlock; video is directly optimisable; automation meets the task; prior
  overwhelms likelihood; best pretraining data; bitter lesson; recursive self-improvement;
  making a model know you; pixels as inputs; text diffusion; AGI as a remote worker; cheap
  shortcuts; one neural net; slop is regretted attention.

## 2026-11-08 — README step 2 prompt (no new ideas)

- **Changed:** the step 2 prompt in the README now asks the agent to list every "Done when"
  before any change, apply all proposals, and report once at the end. It asks for the owner's
  yes only before a change to files outside the project (user-level instructions, skills or
  settings). A test in another project showed that the old prompt did not make an agent pause
  between items.

## 2026-11-07 — first release

- **Sources covered:** X posts and replies 2026-01-01 to 2026-11-04 (full sweep); the
  most-liked X posts 2023 to 2025; both blogs (karpathy.bearblog.dev, karpathy.github.io);
  GitHub repositories and gists; Hacker News comments since 2025; talk transcripts 2025-2026.
- **Ideas:** 157. Duplicate files from parallel drafting were merged into one file per idea,
  dated by the earliest source, with the other sources in `also`.
- **Superseded:** two 2025 views on autocomplete and agent use, replaced by his December 2025
  move to agent coding.
- **Not yet covered:** a full sweep of X posts and replies from 2025 (planned).
