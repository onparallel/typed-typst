// Typst 0.15.1 test suite: tests/suite/model/terms.typ, case issue-5503-terms-in-align.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// `align` is block-level and should interrupt a `terms`.
#show terms: [Terms]
/ a: a
#align(right)[/ i: i]
/ j: j
