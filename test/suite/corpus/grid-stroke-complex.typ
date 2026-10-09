// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case grid-stroke-complex.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  columns: 3,
  [a], table.cell(colspan: 2)[b c],
  table.cell(stroke: blue)[d], [e], [f],
  [g], [h], table.cell(stroke: (left: yellow, top: green, right: aqua, bottom: red))[i],
  [j], [k], [l],
  table.cell(stroke: 3pt)[m], [n], table.cell(stroke: (dash: "loosely-dotted"))[o],
)
