# Contributing

Submit a public open-source project that uses TypeSafe Jev for a concrete purpose. Source code must let a reviewer inspect the integration. Describe what it does without unsupported speed, accuracy, quality, or safety claims.

## Add a project

Create `entries/owner--repository.json` with these fields:

```json
{
  "name": "Project name",
  "repository": "owner/repository",
  "description": "One factual sentence describing the project and its use of Jev.",
  "category": "search",
  "evidence": ["README.md", "src/typesafe.ts"]
}
```

- Use exactly the repository's `owner/name`, without a URL, and lowercase the filename.
- Choose a category from `.github/jev-review.json`; `other` is reserved for uncertain model results.
- Supply 1–6 relative text-file paths from the submitted repository. Include actual integration code as well as documentation.
- Change exactly one entry file in the PR. README is regenerated after merge.
- Run `npm run check` and `npm test` locally if possible.
- Disclose in the PR description whether you maintain or are affiliated with the project.

The reviewer is advisory. A model recommendation does not automatically merge or reject a PR. Missing files, unclear evidence, and incorrect categories can be fixed with another commit, which triggers another review. Review criteria and their thresholds are public and provisional.

## Maintenance

Policy, workflow, generated-output, and entry-removal changes belong in separate maintainer PRs. Entry removals require human review. Initial seed entries were maintained by hand; do not claim they passed live Jev review without a linked report.

## Enable Jev review

The repository owner must configure a dedicated `TYPESAFE_API_KEY` GitHub Actions secret. No key is included or shared with other projects. Until configured, the model review cannot complete; catalog validation remains usable.

```bash
gh secret set TYPESAFE_API_KEY --repo fatwang2/awesome-jev
```

The CLI prompts for the secret. Do not paste keys into PRs, Issues, or committed files. Re-run the review workflow after configuring the key, or update a submission PR.

To calibrate, collect a small human-labeled set containing genuine integrations, keyword false positives, weak evidence, incorrect descriptions, and ambiguous categories. Keep some cases out of threshold tuning and report false acceptance/rejection and category agreement on that held-out set. The action's local CLI can produce reports without publishing comments.
