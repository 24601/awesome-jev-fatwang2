# Awesome Jev

Open-source projects built with [TypeSafe Jev](https://typesafe.ai), with submissions reviewed by Jev.

[Submit a project](CONTRIBUTING.md) · [How reviews work](#how-reviews-work) · [Jev Review Action](https://github.com/fatwang2/jev-review-action)

## Projects

9 projects.

### SDKs

- [TypeSafe JavaScript SDK](https://github.com/typesafe-ai/typesafe-sdk-js) — Official JavaScript and TypeScript client for TypeSafe's typed decision API, with question builders and typed responses\.
- [TypeSafe Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python) — Official Python client for TypeSafe's typed decision API, with synchronous and asynchronous clients\.

### Developer tools

- [Jev Review Action](https://github.com/fatwang2/jev-review-action) — Configurable GitHub Action using Jev to review directory submissions and classify pull requests, with evidence links and template-generated comments\.
- [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) — Synthetic dataset sifter that streams JSONL and Parquet rows through TypeSafe Jev Noul checks to disk\.
- [Supercov](https://github.com/supercorp-ai/supercov) — Code quality and coverage CLI for coding agents that uses TypeSafe Jev to assess source-code quality\.

### Search

- [hev reranker](https://github.com/hev/reranker) — Python library using Jev Noul judgments to score candidate documents for query relevance, then sort or filter the results\.
- [Jev Search](https://github.com/superagents-lab/jev-search) — Web search using Jev to choose sources, time ranges and query candidates, then rank Search1API results by relevance\.

### Applications

- [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) — Python browser agent using Jev to select operations and DOM targets, with a separate text model for typing\.
- [typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) — macOS computer-use tool using Jev to choose actions from OCR and accessibility state, with a separate model for free-text writing\.

## Submit a project

Add up to ten project entries in a PR using the [contribution guide](CONTRIBUTING.md). Each project is reviewed independently. Source paths are optional—the reviewer looks for integration code automatically. You can also [ask for help submitting](https://github.com/fatwang2/awesome-jev/issues/new?template=submission.yml).

## How reviews work

[Jev Review Action](https://github.com/fatwang2/jev-review-action) checks source evidence, reviews the project description and setup instructions, and suggests a category. Jev supplies typed judgments; code renders the comment. Maintainers decide what gets merged.

See the [review policy](.github/jev-review.json) and [validation records](docs/reviews/README.md).

## About

An independent project by [fatwang2](https://github.com/fatwang2), not affiliated with TypeSafe. Inclusion is not a certification. [MIT licensed](LICENSE); listed projects retain their own licenses.
