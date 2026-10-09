// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-cell-order.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Cell order
#let count = counter("count")
#show grid.cell: it => {
  count.step()
  context count.display()
}

#grid(
  columns: (2em,) * 3,
  stroke: aqua,
  rows: 1.2em,
  fill: (x, y) => if calc.odd(x + y) { red } else { orange },
  [a], grid.cell(rowspan: 2)[b], grid.cell(rowspan: 2)[c],
  [d],
  grid.cell(rowspan: 2)[f], [g], [h],
  [i], [j],
  [k], [l], [m],
  grid.cell(rowspan: 2)[n], [o], [p],
  [q], [r],
  [s], [t], [u]
)
