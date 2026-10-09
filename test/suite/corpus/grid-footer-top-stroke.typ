// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-top-stroke.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Footer's top stroke should win when repeated, but lose at the last page.
#set page(height: 10em)
#table(
  stroke: green,
  table.header(table.cell(stroke: red)[Hello]),
  table.cell(stroke: yellow)[Hi],
  table.cell(stroke: yellow)[Bye],
  table.cell(stroke: yellow)[Ok],
  table.footer[Bye],
)
