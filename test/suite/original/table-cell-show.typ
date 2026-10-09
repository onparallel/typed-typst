// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-cell-show.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Cell show rule
#show table.cell: it => [Zz]

#table(
  align: left,
  fill: red,
  stroke: blue,
  columns: 2,
  [AAAAA], [BBBBB],
  [A], [B],
  table.cell(align: right)[C], [D],
  align(right)[E], [F],
  align(horizon)[G], [A\ A\ A]
)
