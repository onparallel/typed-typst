// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case grid-stroke-folding.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test folding
#set grid(stroke: red)
#set grid(stroke: 5pt)

#grid(
  inset: 10pt,
  columns: 2,
  stroke: stroke(dash: "loosely-dotted"),
  grid.vline(start: 2, end: 3, stroke: (paint: green, dash: none)),
  [a], [b],
  grid.hline(end: 1, stroke: blue),
  [c], [d],
  [e], grid.cell(stroke: aqua)[f]
)
