// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-and-rowspan-contiguous-2.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Block should occupy all space
#set page(height: 15em)

#table(
  rows: (auto, 2.5em, 10em, 5em, auto),
  gutter: 3pt,
  inset: 0pt,
  table.header(
    [*H*],
    [*W*]
  ),
  table.cell(rowspan: 3, block(height: 2.5em + 2em + 20em, width: 100%, fill: red))
)
