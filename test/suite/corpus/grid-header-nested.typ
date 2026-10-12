// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-nested.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 14em)
#let t(n) = table(
  columns: 3,
  align: center + horizon,
  gutter: 3pt,
  table.header(
    table.cell(colspan: 3)[*Cool Zone #n*],
    [*Name*], [*Num*], [*Data*]
  ),
  ..range(0, 5).map(i => ([\##i], table.cell(stroke: green)[123], table.cell(stroke: blue)[456])).flatten()
)
#grid(
  gutter: 3pt,
  t(0),
  t(1)
)
