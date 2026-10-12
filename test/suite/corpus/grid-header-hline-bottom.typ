// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-hline-bottom.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Yellow line should be kept here
#set text(6pt)
#table(
  column-gutter: 3pt,
  inset: 1pt,
  table.header(
    [a],
    table.hline(stroke: yellow),
  ),
  table.cell(rowspan: 2)[b]
)
