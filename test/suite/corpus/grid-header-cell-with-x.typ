// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-cell-with-x.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  columns: 2,
  stroke: black,
  inset: 5pt,
  grid.header(grid.cell(x: 0)[b1], grid.cell(x: 0)[b2]),
  // This should skip the header
  grid.cell(x: 1)[c]
)
