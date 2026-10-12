// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-header-footer-and-rowspan-non-contiguous-2.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// This should look right
#set page(height: 20em)

#table(
  rows: (auto, 2.5em, 2em, auto),
  gutter: 3pt,
  table.header[*Hello*][*World*],
  table.cell(rowspan: 3, lorem(20)),
  table.footer[*Ok*][*Bye*],
)
