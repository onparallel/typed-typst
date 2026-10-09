// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-skip-unordered.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  columns: 2,
  [a],
  grid.header(grid.cell(x: 0, y: 2)[y]),
  [b],
  grid.header([x]),
  [c]
)
