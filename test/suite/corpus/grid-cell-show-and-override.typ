// Typst 0.15.1 test suite: tests/suite/layout/grid/cell.typ, case grid-cell-show-and-override.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show grid.cell: it => (it.align, it.fill)
#grid(
  align: left,
  row-gutter: 5pt,
  [A],
  grid.cell(align: right)[B],
  grid.cell(fill: aqua)[B],
)
