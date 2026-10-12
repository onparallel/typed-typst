// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case grid-stroke-vline-colspan.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// - Vline should be placed after the colspan.
// - Hline should be placed under the full-width rowspan.
#table(
  columns: 3,
  rows: 1.25em,
  inset: 1pt,
  stroke: none,
  table.cell(colspan: 2)[a], table.vline(stroke: red), table.hline(stroke: blue), [b],
  [c], [d], [e],
  table.cell(colspan: 3, rowspan: 2)[a], table.vline(stroke: blue), table.hline(stroke: red)
)
