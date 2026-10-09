// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-cell-with-y.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  grid.footer(grid.cell(y: 2)[b]),
  grid.cell(y: 0)[a],
  grid.cell(y: 1)[c],
)
