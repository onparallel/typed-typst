// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-header-and-footer-lack-of-space.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test lack of space for header + text.
#set page(height: 9em + 2.5em + 1.5em)

#table(
  rows: (auto, 2.5em, auto, auto, 10em, 2.5em, auto),
  gutter: 3pt,
  table.header[*Hello*][*World*],
  table.cell(rowspan: 3, lorem(30)),
  table.footer[*Ok*][*Bye*],
)
