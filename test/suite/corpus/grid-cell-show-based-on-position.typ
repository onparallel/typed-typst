// Typst 0.15.1 test suite: tests/suite/layout/grid/cell.typ, case grid-cell-show-based-on-position.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Style based on position
#{
  show grid.cell: it => {
    if it.y == 0 {
      strong(it)
    } else if it.x == 1 {
      emph(it)
    } else {
      it
    }
  }
  grid(
    columns: 3,
    gutter: 3pt,
    [Name], [Age], [Info],
    [John], [52], [Nice],
    [Mary], [50], [Cool],
    [Jake], [49], [Epic]
  )
}
