// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-multiple-unordered.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 4em)
#grid(
  grid.header(grid.cell(x: 0, y: 4)[y]),
  grid.header([x]),
  [a],
  [b],
  [c],
  [d],
  [e],
  [f],
)
