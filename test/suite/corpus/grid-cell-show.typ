// Typst 0.15.1 test suite: tests/suite/layout/grid/cell.typ, case grid-cell-show.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Cell show rule
#show grid.cell: it => [Zz]

#grid(
  align: left,
  fill: red,
  stroke: blue,
  inset: 5pt,
  columns: 2,
  [AAAAA], [BBBBB],
  [A], [B],
  grid.cell(align: right)[C], [D],
  align(right)[E], [F],
  align(horizon)[G], [A\ A\ A]
)
