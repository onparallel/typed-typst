// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case grid-complete-rows.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure grids expand enough for the given rows.
#grid(
  columns: (2em, 2em),
  rows: (2em,) * 4,
  fill: red,
  stroke: aqua,
  [a]
)
