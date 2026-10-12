// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-headers-gutter.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto, height: 12em)
#table(
  columns: 5,
  align: center + horizon,
  gutter: 3pt,
  table.header(
    table.cell(colspan: 5)[*Cool Zone*],
    table.cell(stroke: red)[*Name*], table.cell(stroke: aqua)[*Number*], [*Data 1*], [*Data 2*], [*Etc*],
    table.hline(start: 2, end: 3, stroke: yellow),
  ),
  ..range(0, 6).map(i => ([John \##i], table.cell(stroke: green)[123], table.cell(stroke: blue)[456], [789], [?], table.hline(start: 4, end: 5, stroke: red))).flatten()
)
