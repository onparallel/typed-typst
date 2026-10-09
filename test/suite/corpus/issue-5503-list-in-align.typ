// Typst 0.15.1 test suite: tests/suite/model/list.typ, case issue-5503-list-in-align.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// `align` is block-level and should interrupt a list.
#show list: [List]
- a
- b
#align(right)[- i]
- j
