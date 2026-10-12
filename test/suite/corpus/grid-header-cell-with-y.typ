// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-cell-with-y.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  grid.cell(y: 1)[a],
  grid.header(grid.cell(y: 0)[b]),
  grid.cell(y: 2)[c]
)
