// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-baseline-table.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
- #table(
    inset: 10pt,
    columns: 2,
    [a], [b],
    [c], [d]
  )

- #table(
    inset: 10pt,
    columns: 2,
    stroke: none,
    [a], [b],
    [c], [d]
  )
