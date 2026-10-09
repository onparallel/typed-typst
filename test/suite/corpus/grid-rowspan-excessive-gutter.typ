// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-excessive-gutter.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Excessive rowspan (with gutter)
#set page(height: 10em)
#table(
  columns: 4,
  gutter: 3pt,
  fill: red,
  [a], [b], table.cell(rowspan: 2)[c], [d],
  table.cell(colspan: 2, stroke: (bottom: aqua + 2pt))[e], table.cell(stroke: (bottom: aqua))[f],
  table.cell(colspan: 2, rowspan: 10)[R1], table.cell(colspan: 2, rowspan: 10)[R2],
  [b],
)
