// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-multi-page-row-right-after.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#grid(
  columns: 1,
  grid.header([a]),
  [x],
  grid.header(level: 2, [b]),
  grid.header(level: 3, [c]),
  grid.cell(
    block(fill: red, width: 1.5em, height: 6.4em)
  ),
  [done.],
  [done.]
)
