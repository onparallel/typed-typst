// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-moved-to-bottom-of-rowspans.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  columns: 2,
  [a], [],
  [b], [],
  stroke: red,
  inset: 5pt,
  grid.cell(x: 1, y: 3, rowspan: 4)[b],
  grid.cell(y: 2, rowspan: 2)[a],
  grid.footer(),
  grid.cell(y: 4)[d],
  grid.cell(y: 5)[e],
  grid.cell(y: 6)[f],
)
