// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-rowbreak-auto-and-fixed-pos.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  columns: 2,
  [a],
  grid.header([x]),
  [b],
  grid.header(grid.cell(x: 0, y: 3)[y]),
  [c]
)
