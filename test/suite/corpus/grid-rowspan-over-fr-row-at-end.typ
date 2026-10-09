// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-over-fr-row-at-end.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Fractional rows
// They cause the auto row to expand more than needed.
#set page(height: 10em)
#grid(
  fill: red,
  gutter: 3pt,
  columns: 3,
  rows: (1em, auto, 1fr),
  [a], [b], grid.cell(rowspan: 3, block(height: 4em, width: 1em, fill: orange)),
  [c], [d],
  [e], [f]
)
