// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-split-7.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 5em)
#grid(
  columns: 2,
  stroke: red,
  inset: 5pt,
  grid.cell(rowspan: 5)[a\ b\ c\ d\ e]
)
