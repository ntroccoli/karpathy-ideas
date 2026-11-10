# Contributing

Thank you for helping keep this collection accurate.

## What is welcome

- **Corrections:** a wrong date, a broken or wrong link, a misattribution, a summary that
  misreads the source, a quote that is not exact.
- **Suggestions:** a public idea by Andrej Karpathy that is missing. Include the link.
- **Field reports:** you ran the checklist and want to share what it found. Use the
  "Field report" issue form, or let your agent post one (README step 4). The format is in
  [docs/field-reports.md](docs/field-reports.md). The maintainer checks reports in batches from
  time to time: a valid one is collected and closed (`collected`), an invalid one gets
  `needs-fix` and one comment.

Please open an [issue](https://github.com/ntroccoli/karpathy-ideas/issues/new/choose) using one of
the templates. Pull requests from outside contributors are not accepted yet; this will change
once the format is stable.

## Rules the collection follows

- One idea per file in `ideas/`, in the format described in [AGENTS.md](AGENTS.md).
- Summaries in our own words. At most one quote per idea, 15 words or fewer, exact and linked.
- Facts only from the linked source. Interpretation is labelled "Our reading:".
- Newer views supersede older ones; the old file stays and links to the new one.
- `index.md`, `themes/`, `llms.txt` and `llms-full.txt` are generated: run
  `node scripts/build.mjs`, then `node scripts/validate.mjs` (Node.js 20 or later, no dependencies).

## Commit messages

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), with the types and scopes
listed in [AGENTS.md](AGENTS.md#commit-messages). Example:

```text
fix(idea): correct the source date of the autoresearch note
```

## AI assistance

This repository is maintained with Claude Code. AI-assisted commits keep a `Co-Authored-By`
trailer, and a human reviews every change. If you use AI tools for a contribution, say so.

## Conduct

Everyone taking part follows the [Code of Conduct](CODE_OF_CONDUCT.md).
