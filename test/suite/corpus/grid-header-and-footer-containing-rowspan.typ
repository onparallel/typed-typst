// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-header-and-footer-containing-rowspan.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// When a footer has a rowspan with an empty row, it should be displayed
// properly
#set page(height: 14em, width: auto)

#let count = counter("g")
#table(
  rows: (auto, 2em, auto, auto),
  table.header(
    [eeec],
    table.cell(rowspan: 2, count.step() + context count.display()),
  ),
  [d],
  block(width: 5em, fill: yellow, lorem(7)),
  [d],
  table.footer(
    [eeec],
    table.cell(rowspan: 2, count.step() + context count.display()),
  )
)
#context count.display()
