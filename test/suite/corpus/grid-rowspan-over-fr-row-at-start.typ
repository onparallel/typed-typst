// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-over-fr-row-at-start.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Fractional rows
#set page(height: 10em)
#grid(
  fill: red,
  gutter: 3pt,
  columns: 3,
  rows: (1fr, auto, 1em),
  [a], [b], grid.cell(rowspan: 3, block(height: 4em, width: 1em, fill: orange)),
  [c], [d],
  [e], [f]
)
