// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-rowbreak-mixed-pos.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  columns: 2,
  [a],
  grid.header([x], grid.cell(x: 0)[b]),
  [c],
  grid.hline(stroke: red),
  grid.header([y], grid.cell(x: 0, y: 8)[d]),
  grid.hline(stroke: 3pt),
  [e]
)
