// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-hline-bottom-manually.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Red line should be kept here
#set page(height: 6em)
#set text(6pt)
#table(
  column-gutter: 3pt,
  inset: 1pt,
  table.header(
    table.hline(stroke: red, position: bottom),
    [a],
  ),
  [a],
  table.cell(stroke: aqua)[b]
)
