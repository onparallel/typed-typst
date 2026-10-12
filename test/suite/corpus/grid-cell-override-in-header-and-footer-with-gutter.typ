// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-cell-override-in-header-and-footer-with-gutter.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  gutter: 3pt,
  table.header(table.cell(stroke: red)[Hello]),
  table.footer(table.cell(stroke: aqua)[Bye]),
)
