// Typst 0.15.1 test suite: tests/suite/layout/grid/cell.typ, case grid-cell-align-override.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test overriding outside alignment
#set align(bottom + right)
#grid(
  columns: (1fr, 1fr),
  rows: 2em,
  align: auto,
  fill: green,
  [BR], [BR],
  grid.cell(align: left, fill: aqua)[BL], grid.cell(align: top, fill: red.lighten(50%))[TR]
)
