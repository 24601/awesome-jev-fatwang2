# Awesome Jev

Open-source projects built with [TypeSafe Jev](https://typesafe.ai), with submissions reviewed by Jev.

[Submit a project](CONTRIBUTING.md) · [How reviews work](#how-reviews-work) · [Jev Review Action](https://github.com/fatwang2/jev-review-action)

## Projects

30 projects.

### SDKs

- [TypeSafe JavaScript SDK](https://github.com/typesafe-ai/typesafe-sdk-js) — Official JavaScript and TypeScript client for TypeSafe's typed decision API, with question builders and typed responses\.
- [TypeSafe Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python) — Official Python client for TypeSafe's typed decision API, with synchronous and asynchronous clients\.
- [typesafe\_sdk\_ex](https://github.com/vinnie357/typesafe_sdk_ex) — Typesafe AI SDK in Elixir using Req
- [typesafe-sdk-go](https://github.com/Tangerg/typesafe-sdk-go) — Go SDK for the TypeSafe AI API — typed questions in, probability distributions out\.

### Integration

- [fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) — Claude Code plugin that replaces the compaction summary with Jev decisions: every tool call and result is scored in one fast request, stale ones are dropped or truncated, everything kept stays verbatim\.
- [hono-jev-router](https://github.com/yusukebe/hono-jev-router) — Hono router that uses TypeSafe Jev to match HTTP requests against natural-language route descriptions\.
- [Jev MCP](https://github.com/jkudish/jev-mcp) — MCP server that uses TypeSafe Jev for claim verification, content screening, and semantic candidate ranking\.
- [pg\_typesafe](https://github.com/giuliosmall/pg_typesafe) — PostgreSQL extension that calls TypeSafe Jev from SQL for Choice, Noul, and Score, including batched detect and classify\.
- [Typesafe MCP](https://github.com/itsmostafa/typesafe-mcp) — MCP server that exposes TypeSafe Jev structured evaluations to coding agents and desktop clients\.

### Developer tools

- [Jev Codex Router](https://github.com/0xNatoshi/jev-codex-router) — Codex proxy that uses TypeSafe Jev judgments to route coding turns to different models\.
- [Jev Review](https://github.com/devagrawal09/jev-review) — Code-review workflow that uses TypeSafe Jev structured judgments to assess changes and codebases, with a local results dashboard\.
- [Jev Review Action](https://github.com/fatwang2/jev-review-action) — Configurable GitHub Action using Jev to review directory submissions and classify pull requests, with evidence links and template-generated comments\.
- [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) — Synthetic dataset sifter that streams JSONL and Parquet rows through TypeSafe Jev Noul checks to disk\.
- [jev-git](https://github.com/AkashPriyadarshii/jev-git) — Sub-second Git pre-commit and pre-push reflex gate that screens staged diffs for secrets and destructive commands using TypeSafe Jev\.
- [jev-scout](https://github.com/AkashPriyadarshii/jev-scout) — Zero-hallucination open-source repo and crate scout powered by TypeSafe AI Jev System One scoring\.
- [jev-seo](https://github.com/AkashPriyadarshii/jev-seo) — Zero-cost, agent-first SEO &amp; Generative Engine Optimization \(GEO\) search radar CLI suite and MCP server powered by DuckDuckGo and TypeSafe Jev System One\.
- [jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers) — Systematic software development framework for AI coding agents upgraded with TypeSafe Jev System One typed decisions, zero-hallucination package vetting, and completion gates\.
- [JevSeek](https://github.com/morcoan/JevSeek) — Desktop and CLI coding agent that uses Jev to select the next tool from user intent and recorded execution results\.
- [Leanest](https://github.com/baronunread/leanest) — Local-first test selector that uses TypeSafe Jev semantic judgments to decide which tests are safe to skip for a given code change, dropping straight into CI via its bundled GitHub Action\.
- [SemDecide](https://github.com/sharziki/semdecide) — CLI that uses TypeSafe Jev for semantic predicates, classification, scoring, and filtering in Unix pipelines\.
- [Supercov](https://github.com/supercorp-ai/supercov) — Code quality and coverage CLI for coding agents that uses TypeSafe Jev to assess source-code quality\.
- [TypeSafe AI Playground](https://github.com/markjaquith/typesafe-ai-playground) — Rust CLI with TypeSafe Jev experiments for PHI detection, code-comment review, tone analysis, and classification\.
- [Winnow](https://github.com/GhalebDweikat/winnow) — Claude Code tool-output filter that uses TypeSafe Jev to judge which blocks are relevant to the current task\.

### Search

- [hev reranker](https://github.com/hev/reranker) — Python library using Jev Noul judgments to score candidate documents for query relevance, then sort or filter the results\.
- [Jev Search](https://github.com/superagents-lab/jev-search) — Web search using Jev to choose sources, time ranges and query candidates, then rank Search1API results by relevance\.
- [neo4jev](https://github.com/jexp/neo4jev) — Neo4j graph navigation demo that uses TypeSafe Jev to select relationships and check goals during beam search\.

### Applications

- [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) — Python browser agent using Jev to select operations and DOM targets, with a separate text model for typing\.
- [Jev-Trades](https://github.com/zadescoxp/Jev-Trades) — A Next\.js dashboard for live crypto market data and TypeSafe-powered paper trading\.
- [typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) — macOS computer-use tool using Jev to choose actions from OCR and accessibility state, with a separate model for free-text writing\.

### Research

- [LitJev](https://github.com/zhengxuyu/litjev) — Open reproduction of Jev's decision layer on Qwen models that serves the Jev /v1/systemone request and response schema \(choice, score, noul\) from a local Hugging Face checkpoint by reading option logits instead of generating text, with an MMLU-Pro direct-answer benchmark\.

## Submit a project

Add up to ten project entries in a PR using the [contribution guide](CONTRIBUTING.md). Each project is reviewed independently. Source paths are optional—the reviewer looks for integration code automatically. You can also [ask for help submitting](https://github.com/fatwang2/awesome-jev/issues/new?template=submission.yml).

## How reviews work

[Jev Review Action](https://github.com/fatwang2/jev-review-action) checks source evidence, reviews the project description and setup instructions, and suggests a category. Jev supplies typed judgments; code renders the comment. Maintainers decide what gets merged.

See the [review policy](.github/jev-review.json) and [validation records](docs/reviews/README.md).

## About

An independent project by [fatwang2](https://github.com/fatwang2), not affiliated with TypeSafe. Inclusion is not a certification. [MIT licensed](LICENSE); listed projects retain their own licenses.
