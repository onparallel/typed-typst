// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-over-auto-row.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Auto row expansion
#set page(height: 10em)
#grid(
  columns: (1em, 1em),
  rows: (0.5em, 0.5em, auto),
  fill: orange,
  gutter: 3pt,
  grid.cell(rowspan: 4, [x x x x] + place(bottom)[*Bot*]),
  [a],
  [b],
  [c],
  [d]
)
