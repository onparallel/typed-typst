// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-cell-show-and-override.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show table.cell: it => (it.align, it.fill)
#table(
  align: left,
  row-gutter: 5pt,
  [A],
  table.cell(align: right)[B],
  table.cell(fill: aqua)[B],
)
