// Typst 0.15.1 test suite: tests/suite/layout/grid/rtl.typ, case grid-rtl-multiple-regions.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test multiple regions
#set page(height: 5em)
#set text(dir: rtl)
#grid(
  stroke: red,
  fill: aqua,
  columns: 4,
  [a], [b], [c], [d],
  [a], grid.cell(colspan: 2)[e, f, g, h, i], [f],
  [e], [g], grid.cell(colspan: 2)[eee\ e\ e\ e],
  grid.cell(colspan: 4)[eeee e e e]
)
