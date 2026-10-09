// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-rowbreak-line.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  columns: 1,
  [a],
  grid.hline(stroke: red),
  grid.footer([b]),
  grid.hline(stroke: 3pt),
)
