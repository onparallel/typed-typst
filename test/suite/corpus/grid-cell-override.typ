// Typst 0.15.1 test suite: tests/suite/layout/grid/cell.typ, case grid-cell-override.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Cell override
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
  align(horizon)[G], [A\ A\ A],
  grid.cell(align: horizon)[G2], [A\ A\ A],
  grid.cell(inset: 0pt)[I], [F],
  [H], grid.cell(fill: blue)[J]
)
