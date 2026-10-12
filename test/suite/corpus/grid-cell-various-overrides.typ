// Typst 0.15.1 test suite: tests/suite/layout/grid/cell.typ, case grid-cell-various-overrides.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  columns: 2,
  fill: red,
  align: left,
  inset: 5pt,
  [ABC], [ABC],
  grid.cell(fill: blue)[C], [D],
  grid.cell(align: center)[E], [F],
  [G], grid.cell(inset: 0pt)[H]
)
