// Typst 0.15.1 test suite: tests/suite/layout/grid/positioning.typ, case grid-cell-show-x-y.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#{
  show grid.cell: it => (it.x, it.y)
  grid(
    columns: 2,
    inset: 5pt,
    fill: aqua,
    gutter: 3pt,
    [Hello], [World],
    [Sweet], [Home]
  )
}
#{
  show table.cell: it => pad(rest: it.inset)[#(it.x, it.y)]
  table(
    columns: 2,
    gutter: 3pt,
    [Hello], [World],
    [Sweet], [Home]
  )
}
