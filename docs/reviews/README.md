# Review records

The initial entries were seeded through maintainer inspection of public sources. On September 18, 2026, [the first live submission review](https://github.com/fatwang2/awesome-jev/actions/runs/35300733561/attempts/3) completed successfully using a dedicated TypeSafe key and `jev-1.13.0`: Jev classified Jev Review Action as `developer_tools`, all three configured checks passed, and the workflow updated its existing bot comment and uploaded the JSON report. A [saved copy of that report](2026-09-18-pr-4.json) preserves the result beyond the artifact retention period. This validates one end-to-end example; it is not an accuracy evaluation. Offline workflow tests are available in the Action repository.

Automatic source discovery was also [verified on a submission with no evidence paths](https://github.com/fatwang2/awesome-jev/actions/runs/35305728180) using Action v0.2.0. The integration, description, and setup checks passed; the suggested category was `developer_tools` with confidence 0.87. Its [saved report](2026-09-18-pr-4-auto-discovery.json) records the source files found and scan limits.


[Back to the directory](../../README.md) · [Review policy](../../.github/jev-review.json)
