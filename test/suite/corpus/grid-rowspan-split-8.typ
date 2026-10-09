// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-split-8.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 5em)
#table(
  columns: 2,
  gutter: 3pt,
  stroke: red,
  inset: 5pt,
  table.cell(rowspan: 5)[a\ b\ c\ d\ e]
)

// Rowspan split without ending at the auto row
