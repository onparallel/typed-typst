// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case table-stroke-vline-position-left-and-right.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test left and right for table vlines.
#table(
  columns: 3,
  inset: 5pt,
  table.vline(stroke: green, position: left), table.vline(stroke: red, position: right), [a],
  table.vline(stroke: 2pt, position: left), table.vline(stroke: red, position: right), [b],
  table.vline(stroke: 2pt, position: left), table.vline(stroke: red, position: right), [c],
  table.vline(stroke: 2pt, position: left)
)

#table(
  columns: 3,
  inset: 5pt,
  gutter: 3pt,
  table.vline(stroke: green, position: left), table.vline(stroke: red, position: right), [a],
  table.vline(stroke: blue, position: left), table.vline(stroke: red, position: right), [b],
  table.vline(stroke: blue, position: left), table.vline(stroke: red, position: right), [c],
  table.vline(stroke: 2pt, position: left)
)
