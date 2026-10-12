// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-stroke-edge-cases.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test footer stroke priority edge case
#set page(height: 10em)
#table(
  columns: 2,
  stroke: black,
  ..(table.cell(stroke: aqua)[d],) * 8,
  table.footer(
    table.cell(rowspan: 2, colspan: 2)[a],
    [c], [d]
  )
)
