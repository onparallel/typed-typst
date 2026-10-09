// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case grid-stroke-priority-line-cell.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Hlines and vlines should always appear on top of cell strokes.
#table(
  columns: 3,
  stroke: aqua,
  table.vline(stroke: red, position: end), [a], table.vline(stroke: red), [b], [c],
  table.cell(stroke: blue)[d], [e], [f],
  table.hline(stroke: red),
  [g], table.cell(stroke: blue)[h], [i],
)

#table(
  columns: 3,
  gutter: 3pt,
  stroke: aqua,
  table.vline(stroke: red, position: end), [a], table.vline(stroke: red), [b], [c],
  table.cell(stroke: blue)[d], [e], [f],
  table.hline(stroke: red),
  [g], table.cell(stroke: blue)[h], [i],
)
