// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-rowbreak-fixed-pos.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  columns: 2,
  [z],
  grid.hline(stroke: red),
  grid.header(grid.cell(x: 0)[b]),
  grid.hline(stroke: 3pt),
  [w],
  [j],
  grid.header(grid.cell(x: 0, y: 9)[c]),
  [k]
)
