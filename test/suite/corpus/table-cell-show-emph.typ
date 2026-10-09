// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-cell-show-emph.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#{
  show table.cell: emph
  table(
    columns: 2,
    [Person], [Animal],
    [John], [Dog]
  )
}
