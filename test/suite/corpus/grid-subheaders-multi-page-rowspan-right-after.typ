// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-multi-page-rowspan-right-after.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#grid(
  columns: 2,
  grid.header([a]),
  [x], [y],
  grid.header(level: 2, [b]),
  grid.header(level: 3, [c]),
  grid.cell(
    rowspan: 5,
    block(fill: red, width: 1.5em, height: 6.4em)
  ),
  [cell],
  [cell],
  grid.cell(x: 0)[done.],
  grid.cell(x: 0)[done.]
)
