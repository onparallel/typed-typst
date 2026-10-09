// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-cell-override-in-header-and-footer.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  table.header(table.cell(stroke: red)[Hello]),
  table.footer(table.cell(stroke: aqua)[Bye]),
)
