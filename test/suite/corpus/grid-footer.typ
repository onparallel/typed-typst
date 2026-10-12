// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto, height: 15em)
#set text(6pt)
#set table(inset: 2pt, stroke: 0.5pt)
#table(
  columns: 5,
  align: center + horizon,
  table.header(
    table.cell(colspan: 5)[*Cool Zone*],
    table.cell(stroke: red)[*Name*], table.cell(stroke: aqua)[*Number*], [*Data 1*], [*Data 2*], [*Etc*],
    table.hline(start: 2, end: 3, stroke: yellow)
  ),
  ..range(0, 5).map(i => ([John \##i], table.cell(stroke: green)[123], table.cell(stroke: blue)[456], [789], [?], table.hline(start: 4, end: 5, stroke: red))).flatten(),
  table.footer(
    table.hline(start: 2, end: 3, stroke: yellow),
    table.cell(stroke: red)[*Name*], table.cell(stroke: aqua)[*Number*], [*Data 1*], [*Data 2*], [*Etc*],
    table.cell(colspan: 5)[*Cool Zone*]
  )
)
