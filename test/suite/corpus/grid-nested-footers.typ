// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-nested-footers.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 12em, width: auto)
#table(
  [a\ b\ c\ d],
  table.footer(table(
    [c],
    [d],
    table.footer[b],
  ))
)
