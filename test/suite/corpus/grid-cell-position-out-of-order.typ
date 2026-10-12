// Typst 0.15.1 test suite: tests/suite/layout/grid/positioning.typ, case grid-cell-position-out-of-order.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Positioning cells in a different order than they appear
#grid(
  columns: 2,
  [A], [B],
  grid.cell(x: 1, y: 2)[C], grid.cell(x: 0, y: 2)[D],
  grid.cell(x: 1, y: 1)[E], grid.cell(x: 0, y: 1)[F],
)
