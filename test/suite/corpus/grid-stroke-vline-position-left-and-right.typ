// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case grid-stroke-vline-position-left-and-right.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test left and right for grid vlines.
#grid(
  columns: 3,
  inset: 5pt,
  grid.vline(stroke: green, position: left), grid.vline(stroke: red, position: right), [a],
  grid.vline(stroke: 2pt, position: left), grid.vline(stroke: red, position: right), [b],
  grid.vline(stroke: 2pt, position: left), grid.vline(stroke: red, position: right), [c],
  grid.vline(stroke: 2pt, position: left)
)

#grid(
  columns: 3,
  inset: 5pt,
  gutter: 3pt,
  grid.vline(stroke: green, position: left), grid.vline(stroke: red, position: right), [a],
  grid.vline(stroke: blue, position: left), grid.vline(stroke: red, position: right), [b],
  grid.vline(stroke: blue, position: left), grid.vline(stroke: red, position: right), [c],
  grid.vline(stroke: 2pt, position: left)
)
