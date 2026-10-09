// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-rowbreak-auto-pos.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  columns: 2,
  [x],
  grid.hline(stroke: red),
  grid.header([a]),
  grid.hline(stroke: 3pt),
  [y],
  grid.header(),
  [z],
)
