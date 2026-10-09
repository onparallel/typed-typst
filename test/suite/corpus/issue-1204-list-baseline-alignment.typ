// Typst 0.15.1 test suite: tests/suite/model/list.typ, case issue-1204-list-baseline-alignment.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
- A
- $ sum_(i = 1)^n overbrace(x^6, y) $
- #box(baseline: 1cm)[C]
- #v(1cm) D
- #text(48pt)[E]
- #block(inset: 10pt, stroke: red)[Hello world!]
- #rect[Hello world!]
