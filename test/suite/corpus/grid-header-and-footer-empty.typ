// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-header-and-footer-empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Empty footer should just be a repeated blank row
#set page(height: 8em)
#table(
  columns: 4,
  align: center + horizon,
  table.header(),
  ..range(0, 2).map(i => (
    [John \##i],
    table.cell(stroke: green)[123],
    table.cell(stroke: blue)[456],
    [789]
  )).flatten(),
  table.footer(),
)
