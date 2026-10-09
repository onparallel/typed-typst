// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-split-10.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 6em)
#table(
  rows: (4em,) * 7 + (auto,) + (4em,) * 7,
  columns: 2,
  column-gutter: 1em,
  row-gutter: (1em, 2em) * 4,
  fill: (x, y) => if calc.odd(x + y) { green } else { green.darken(40%) },
  table.cell(rowspan: 15, block(fill: blue, width: 2em, height: 4em * 14 + 3em)),
  [] * 15
)
