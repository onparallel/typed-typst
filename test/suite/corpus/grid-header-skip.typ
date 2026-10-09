// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-skip.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  columns: 2,
  [x], [y],
  grid.header([a]),
  grid.header([b]),
  grid.cell(x: 1)[c], [d],
  grid.header([e]),
  [f], grid.cell(x: 1)[g]
)
