// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-split-16.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Expanding on unbreakable auto row
#set page(height: 7em, margin: (bottom: 2em))
#grid(
  columns: 2,
  rows: (1em, 1em, auto, 1em, 1em, 1em),
  fill: (x, y) => if x == 0 { aqua } else { blue },
  stroke: black,
  gutter: 2pt,
  grid.cell(rowspan: 5, block(height: 10em)[a]),
  [a],
  [b],
  grid.cell(breakable: false, v(3em) + [c]),
  [d],
  [e],
  [f], [g]
)
