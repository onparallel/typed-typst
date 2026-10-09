// Typst 0.15.1 test suite: tests/suite/layout/grid/cell.typ, case grid-cell-show-emph.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#{
  show grid.cell: emph
  grid(
    columns: 2,
    gutter: 3pt,
    [Hello], [World],
    [Sweet], [Italics]
  )
}
