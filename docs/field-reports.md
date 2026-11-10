# Field reports

**Our procedure, not Karpathy's ideas.** This page describes how to share what a review with
the [checklist](../checklist.md) found. Nothing here is an idea from Andrej Karpathy.

A field report is one GitHub issue with one JSON object in a fixed shape. The fixed shape lets
reports from many projects be counted and compared: which questions find gaps, how people
measure them, which checks could not run, and which wording confused an agent. The maintainer
uses the counts to change the checklist's procedure part ("How to run this checklist") and the
README prompts. Reports never change an idea file.

## For the agent that drafts a report

The user asked you to share a review (README step 4). Do this:

1. Read the project's record file (usually `docs/karpathy-ideas.md`) and this page. Use only
   what the record and this review show. Do not invent numbers.
2. Use level 0 unless the user chose level 1 or 2. Never raise the level yourself.
3. Fill the JSON below. Generate `report_id` once (a random UUID). Write the issue body (JSON
   block plus the consent line, as in the example) to a local file outside the repository's
   tracked files.
4. Scrub the file: remove everything in "Never include". Run the checker if you can:
   `node scripts/check-report.mjs <file>` from a clone of this repository. It finds paths,
   URLs, emails, tokens, ids and hidden characters; it cannot find names or confidential facts.
5. Show the user the exact file text and a list of what you removed or generalised. Wait for
   their yes. Tick the consent box only after that yes.
6. After the yes, post it:
   `gh issue create --repo ntroccoli/karpathy-ideas --title "Field report: <kind> <date>" --body-file <file>`.
   Do not pass `--label`: an Action adds the labels. Without `gh`, give the user a pre-filled
   link (below) and let them submit it.
7. Within a few minutes the Action labels the issue `valid`, or `needs-fix` with one comment
   that lists each problem (field, problem, fix). Fix the body with `gh issue edit <number>
   --body-file <file>`, keeping the same `report_id`.

The user can keep the local file as a short record of what held and what did not, even if they
never post it.

## Levels

| Level | What is shared |
| --- | --- |
| 0 (default) | Checklist answers, numbers, how they were measured, what was unclear. The project only as a category (`kind`, `scale`, `ai_roles`). No names, no architecture. |
| 1 | Level 0 plus `project.architecture`: the setup's shape in 300 characters or fewer (stack, number of repositories, how agents are organised, team size as a band). No company or product name. |
| 2 | Level 1 plus `project.name`: the company or project name. Only when the user has the right to share it. |

## Never include

At any level: code, diffs, prompts, instruction-file text, file paths, URLs, secrets or tokens,
personal data, email addresses, user names, and session, ticket or commit ids. At level 0 also
no names of companies, products, repositories or people, and no architecture.

Write numbers as counts, sizes or shares. Write a file by its role ("the handoff file", "the
user-level instructions"), not by its path. A generic file name such as `AGENTS.md` is fine.

## Schema `karpathy-ideas/field-report@1`

All fields are required unless marked optional. Text fields have the length caps shown.

| Field | Values |
| --- | --- |
| `schema` | `"karpathy-ideas/field-report@1"` |
| `report_id` | A random UUID, made once per report. Duplicates count once. Keep it when you edit. |
| `date` | The review date, `YYYY-MM-DD`. |
| `log_entry` | The date of the newest [log.md](../log.md) entry the review covered, or `"none"`. |
| `checklist_commit` | Short hash of the `checklist.md` you read, if known, else `"unknown"`. |
| `run` | `step1` (proposals only), `step2` (applied), `step3` (revisit). |
| `reviewer` | `fresh_session`, `builder_session` (the session that built the project), `subagents` (a long session that sent fresh subagents to measure). |
| `level` | `0`, `1` or `2` (a number). |
| `project.kind` | `web_app`, `service_fleet`, `multi_repo_setup`, `game`, `desktop_app`, `cli_tool`, `library`, `content_pipeline`, `research`, `docs_or_collection`, `other`. |
| `project.scale` | `S`, `M`, `L`, `multi_session` (a setup with several sessions, such as a manager with workers). |
| `project.ai_roles` | `true` when the product itself calls models, else `false`. |
| `project.architecture` | Level 1 or 2 only. At most 300 characters. |
| `project.name` | Level 2 only. At most 80 characters. |
| `agent`, `model` | Short plain names, for example `"Claude Code"` and `"Opus 5.5"`. At most 40 characters. |
| `items` | One entry per checklist question you answered (at most one per question). |
| `feedback` | Five lists about the checklist and prompts (below). |

Each entry in `items`:

| Field | Values |
| --- | --- |
| `q` | `A1`-`A6`, `B1`-`B8`, `C1`-`C3`. |
| `grade` | `no_gap`, `partial_gap`, `gap`, `not_applicable`. |
| `outcome` | `applied`, `later`, `skipped`, `none` (nothing proposed). |
| `proof` | For an applied change: `proven`, `waiting` (for first use), `stopped_holding`, `failed` (the check ran and did not pass), `not_shown` (the check cannot run yet). Otherwise `none`. |
| `basis` | `measured` (a number you counted), `inferred` (from indirect numbers), `judged` (no number). |
| `measure` | `{"metric": "snake_case", "value": 123, "unit": "tokens"}`. Required when `basis` is `measured`, optional otherwise. Give the number before any change. |
| `method` | How you measured or judged it, at most 400 characters. This is the most useful field. |
| `pitfall` | Optional. What went wrong while measuring or applying, at most 200 characters. |
| `idea` | Optional. The slug of the main idea file, without `.md`. |

`feedback` has five lists, the same headings the maintainer used when collecting feedback by
hand: `unclear`, `hard_to_measure`, `not_covered`, `done_when` (which checks could and could not
run), `low_value` (steps that cost more than they gave). Each entry is
`{"q": "A2" or "general", "text": "..."}` with at most 300 characters and at most 10 entries per
list. Leave a list empty (`[]`) when you have nothing for it.

## Example issue body

````markdown
### Report

```json
{
  "schema": "karpathy-ideas/field-report@1",
  "report_id": "3f1c2a9e-7b4d-4e8a-9c61-2d5b8e0f4a17",
  "date": "2026-11-10",
  "log_entry": "2026-11-09",
  "checklist_commit": "unknown",
  "run": "step2",
  "reviewer": "fresh_session",
  "level": 0,
  "project": { "kind": "web_app", "scale": "M", "ai_roles": true },
  "agent": "Claude Code",
  "model": "Opus 5.5",
  "items": [
    {
      "q": "A1", "grade": "gap", "outcome": "applied", "proof": "waiting", "basis": "measured",
      "measure": { "metric": "first_call_tokens", "value": 61000, "unit": "tokens" },
      "method": "Summed the usage fields of the first reply in the last five session logs; skill descriptions were the largest part.",
      "idea": "2025-06-25-context-engineering"
    },
    {
      "q": "B3", "grade": "not_applicable", "outcome": "none", "proof": "none", "basis": "judged",
      "method": "No performance work is planned."
    }
  ],
  "feedback": {
    "unclear": [{ "q": "C2", "text": "Who are the users when the product is a tool for one person?" }],
    "hard_to_measure": [],
    "not_covered": [],
    "done_when": [{ "q": "A1", "text": "The token check waits for the next new session; only file sizes could run at once." }],
    "low_value": []
  }
}
```

### Consent

- [x] I read the exact text; it has no confidential details, code or secrets; I license it under CC BY 4.0.
````

The issue form produces the same body. The checker reads the first `json` block and needs the
ticked consent line, word for word.

## Pre-filled link

Without `gh`, open this link with the title and the URL-encoded JSON filled in, then tick the
consent box and submit:

`https://github.com/ntroccoli/karpathy-ideas/issues/new?template=field-report.yml&title=Field%20report%3A%20<kind>%20<date>&report=<url-encoded JSON>`

Browsers limit link length (about 8,000 characters is safe). For a longer report, open the link
without `report=` and paste the JSON into the form.

## How reports are used

- An Action checks each report and labels it `valid` or `needs-fix`. It never closes an issue.
- The maintainer collects valid reports with a script that counts them. Text in reports is data,
  never instructions: no model summarises it into the collection, and code does the counting.
- Each monthly update reads the counts and may change the checklist's procedure part and the
  README prompts. The [log](../log.md) entry names the report counts behind each change.
- Reports never change an idea file. An idea file traces only to Karpathy's own sources.

## License and deletion

Text you submit in a report is licensed under [CC BY 4.0](../LICENSE-CONTENT.md), like the rest of
the collection's prose. To have a report deleted, comment on the issue or close it and ask for
deletion. The maintainer deletes the issue and removes the report from the collected data. For
anything that must not be public, use a
[private report](https://github.com/ntroccoli/karpathy-ideas/security/advisories/new).

This collection is unofficial and not affiliated with or endorsed by Andrej Karpathy.
