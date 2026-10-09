// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-split-15.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Auto row must expand properly in both cases
#set text(10pt)
#show table.cell: it => if it.x == 0 { it } else { layout(size => size.height) }
#table(
  columns: 2,
  rows: (1em, auto, 2em, 3em, 4em),
  gutter: 3pt,
  table.cell(rowspan: 5, block(fill: orange, height: 15em)[a]),
  [b],
  [c],
  [d],
  [e],
  [f]
)

#table(
  columns: 2,
  rows: (1em, auto, 2em, 3em, 4em),
  gutter: 3pt,
  table.cell(rowspan: 5, breakable: false, block(fill: orange, height: 15em)[a]),
  [b],
  [c],
  [d],
  [e],
  [f]
)
