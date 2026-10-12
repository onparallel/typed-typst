// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-multi-page-rowspan-gutter.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 9em)
#grid(
  columns: 2,
  column-gutter: 4pt,
  row-gutter: (0pt, 4pt, 8pt, 4pt),
  inset: (bottom: 0.5pt),
  stroke: (bottom: 1pt),
  grid.header([a]),
  [x],
  grid.header(level: 2, [b]),
  [y],
  grid.header(level: 3, [c]),
  [z], [z],
  grid.cell(
    rowspan: 5,
    block(fill: red, width: 1.5em, height: 6.4em)
  ),
  [cell],
  [cell],
  [a\ b],
  grid.cell(x: 0)[end],
)
