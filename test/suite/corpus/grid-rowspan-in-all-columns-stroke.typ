// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-in-all-columns-stroke.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  columns: 2,
  table.cell(stroke: (bottom: red))[a], [b],
  table.hline(stroke: green),
  table.cell(stroke: (top: yellow, left: green, right: aqua, bottom: blue), colspan: 1, rowspan: 2)[d], table.cell(colspan: 1, rowspan: 2)[e],
  [f],
  [g]
)
