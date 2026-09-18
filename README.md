# Awesome Jev

[![Catalog checks](https://github.com/fatwang2/awesome-jev/actions/workflows/catalog.yml/badge.svg)](https://github.com/fatwang2/awesome-jev/actions/workflows/catalog.yml)

A source-backed directory of open-source projects built with [TypeSafe Jev](https://typesafe.ai), with a configurable review workflow powered by Jev itself.

Submit a project without needing to locate its integration code. [Jev Review Action](https://github.com/fatwang2/jev-review-action) finds likely source files, checks the submission against this directory's policy, suggests a category, and posts a structured review. A maintainer decides what gets merged.

**No text-generation model is involved in the automated review.** Jev supplies typed judgments; code collects evidence, applies thresholds, and renders comments. The reviewer is a separate open-source Action that other directories and repositories can reuse.

This is an independent personal project by [fatwang2](https://github.com/fatwang2), not affiliated with or endorsed by TypeSafe. Inclusion is not a certification of quality, security, or accuracy.

## Review status

The initial entries were seeded through maintainer inspection of public sources. On September 18, 2026, [the first live submission review](https://github.com/fatwang2/awesome-jev/pull/4#issuecomment-5724406100) completed successfully using a dedicated TypeSafe key and `jev-1.13.0`: Jev classified Jev Review Action as `developer_tools`, all three configured checks passed, and the workflow updated its existing bot comment and uploaded the JSON report. A [saved copy of that report](docs/reviews/2026-09-18-pr-4.json) preserves the result beyond the artifact retention period. This validates one end-to-end example; it is not an accuracy evaluation. Offline workflow tests are available in the Action repository.

## Submit a project

1. Add one JSON file under `entries/`, named `owner--repository.json` in lowercase.
2. Include the project name, GitHub repository, a short factual description, and a proposed category. Source file paths are optional.
3. Open a PR containing only that file. Do not edit this generated README.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the entry format and [the review policy](.github/jev-review.json) for exact criteria and provisional thresholds. Use the [submission help form](https://github.com/fatwang2/awesome-jev/issues/new?template=submission.yml) if you need a maintainer to prepare the entry; Issues are not automatically converted to PRs.

## How review works

The Action checks the public repository's README, dependency manifests, and automatically discovered source files at a fixed commit. You may supply up to six source paths to help it; if discovery is insufficient, the review asks for paths instead of treating missing evidence as a rejection. Jev judges concrete integration, whether the proposed description is supported, and whether setup instructions are usable. A separate Choice question suggests the category.

The comment reports the outcome, probabilities, evidence links, reviewed PR commit, model version, and policy hash. Missing evidence, an uncertain category, or a proposed-category mismatch requires maintainer review. The Action never merges a PR or edits the submission. PR runs retain a JSON report as a GitHub Actions artifact for 14 days; this is not a permanent review archive.

README and source excerpts are sent to TypeSafe. Provider failures are reported as failures, not favorable reviews. The privileged workflow executes only trusted base-branch code and reads submitted files as data.

After a maintainer merges an entry, GitHub Actions validates the catalog and regenerates this README. Source data lives in `entries/`; the introduction lives in `docs/introduction.md`.

## Projects

4 projects. Entries are alphabetical within each category.

### Sdk

- [TypeSafe JavaScript SDK](https://github.com/typesafe-ai/typesafe-sdk-js) — Official JavaScript and TypeScript client for TypeSafe's typed decision API, with question builders and typed responses\.
- [TypeSafe Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python) — Official Python client for TypeSafe's typed decision API, with synchronous and asynchronous clients\.

### Search

- [Every](https://github.com/sufianetaouil/every) — Semantic code-search CLI that asks Jev yes/no questions about source units and ranks the returned probabilities\.
- [Jev Search](https://github.com/superagents-lab/jev-search) — Web search using Jev to choose sources, time ranges and query candidates, then rank Search1API results by relevance\.

## Development

Node.js 22 or newer. Run `npm run check`, `npm test`, and `npm run build`. No API key is needed to validate or render the catalog.

## License

MIT. Linked projects retain their own licenses and terms.
