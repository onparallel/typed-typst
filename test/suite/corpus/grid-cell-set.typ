// Typst 0.15.1 test suite: tests/suite/layout/grid/cell.typ, case grid-cell-set.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Cell set rules
#set grid.cell(align: center)
#show grid.cell: it => (it.align, it.fill, it.inset)
#set grid.cell(inset: 20pt)
#grid(
  align: left,
  row-gutter: 5pt,
  [A],
  grid.cell(align: right)[B],
  grid.cell(fill: aqua)[B],
)
