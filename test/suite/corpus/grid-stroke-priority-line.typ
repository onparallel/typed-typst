// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case grid-stroke-priority-line.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Line specification order priority
// The last line should be blue, not red.
// The middle aqua line should be gone due to the 'none' override.
#grid(
  columns: 2,
  inset: 2pt,
  grid.hline(y: 2, stroke: red + 5pt),
  grid.vline(),
  [a], [b],
  grid.hline(stroke: red),
  grid.hline(stroke: none),
  [c], grid.cell(stroke: (top: aqua))[d],
  grid.hline(stroke: blue),
)
