# Awesome Jev

[![Catalog checks](https://github.com/fatwang2/awesome-jev/actions/workflows/catalog.yml/badge.svg)](https://github.com/fatwang2/awesome-jev/actions/workflows/catalog.yml)

A source-backed directory of open-source projects built with [TypeSafe Jev](https://typesafe.ai), with a configurable review workflow powered by Jev itself.

Submit a project with links to the files that show how it uses Jev. [Jev Review Action](https://github.com/fatwang2/jev-review-action) reads those files, checks the submission against this directory's policy, suggests a category, and posts a structured review. A maintainer decides what gets merged.

**No text-generation model is involved in the automated review.** Jev supplies typed judgments; code collects evidence, applies thresholds, and renders comments. The reviewer is a separate open-source Action that other directories and repositories can reuse.

This is an independent personal project by [fatwang2](https://github.com/fatwang2), not affiliated with or endorsed by TypeSafe. Inclusion is not a certification of quality, security, or accuracy.

## Review status

The initial entries were seeded through maintainer inspection of public sources. Automated live Jev reviews have not yet been validated: a dedicated `TYPESAFE_API_KEY` must be configured before the review workflow can call the model. Offline workflow tests are available in the Action repository. No classification-accuracy claims are made.

## Submit a project

1. Add one JSON file under `entries/`, named `owner--repository.json` in lowercase.
2. Include a short factual description, a proposed category, and 1–6 source file paths showing the Jev integration.
3. Open a PR containing only that file. Do not edit this generated README.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the entry format and [the review policy](.github/jev-review.json) for exact criteria and provisional thresholds. Use the [submission help form](https://github.com/fatwang2/awesome-jev/issues/new?template=submission.yml) if you need a maintainer to prepare the entry; Issues are not automatically converted to PRs.

## How review works

The Action checks the public repository's README and selected source files at a fixed commit. Jev judges concrete integration, whether the proposed description is supported, and whether setup instructions are usable. A separate Choice question suggests the category.

The comment reports the outcome, probabilities, evidence links, reviewed PR commit, model version, and policy hash. Missing evidence, an uncertain category, or a proposed-category mismatch requires maintainer review. The Action never merges a PR or edits the submission. PR runs retain a JSON report as a GitHub Actions artifact for 14 days; this is not a permanent review archive.

README and source excerpts are sent to TypeSafe. Provider failures are reported as failures, not favorable reviews. The privileged workflow executes only trusted base-branch code and reads submitted files as data.

After a maintainer merges an entry, GitHub Actions validates the catalog and regenerates this README. Source data lives in `entries/`; the introduction lives in `docs/introduction.md`.

## Projects
