# Awesome Jev

Open-source projects built with [TypeSafe Jev](https://typesafe.ai), with submissions reviewed by Jev.

[Submit a project](CONTRIBUTING.md) · [How reviews work](#how-reviews-work) · [Jev Review Action](https://github.com/fatwang2/jev-review-action)

## Projects

5 projects.

### SDKs

- [TypeSafe JavaScript SDK](https://github.com/typesafe-ai/typesafe-sdk-js) — Official JavaScript and TypeScript client for TypeSafe's typed decision API, with question builders and typed responses\.
- [TypeSafe Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python) — Official Python client for TypeSafe's typed decision API, with synchronous and asynchronous clients\.

### Developer tools

- [Jev Review Action](https://github.com/fatwang2/jev-review-action) — Configurable GitHub Action using Jev to review directory submissions and classify pull requests, with evidence links and template-generated comments\.
- [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) — Synthetic dataset sifter that streams JSONL and Parquet rows through TypeSafe Jev Noul checks to disk\.

### Search

- [Jev Search](https://github.com/superagents-lab/jev-search) — Web search using Jev to choose sources, time ranges and query candidates, then rank Search1API results by relevance\.

## Submit a project

Add one project entry in a PR using the [contribution guide](CONTRIBUTING.md). Source paths are optional—the reviewer looks for integration code automatically. You can also [ask for help submitting](https://github.com/fatwang2/awesome-jev/issues/new?template=submission.yml).

## How reviews work

[Jev Review Action](https://github.com/fatwang2/jev-review-action) checks source evidence, reviews the project description and setup instructions, and suggests a category. Jev supplies typed judgments; code renders the comment. Maintainers decide what gets merged.

See the [review policy](.github/jev-review.json) and [validation records](docs/reviews/README.md).

## About

An independent project by [fatwang2](https://github.com/fatwang2), not affiliated with TypeSafe. Inclusion is not a certification. [MIT licensed](LICENSE); listed projects retain their own licenses.
