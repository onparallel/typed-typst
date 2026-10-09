// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-and-rowspan-non-contiguous-1.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Rowspan sizing algorithm doesn't do the best job at non-contiguous content
// ATM.
#set page(height: 15em)

#table(
  rows: (auto, 2.5em, 2em, auto, 5em),
  table.header(
    [*Hello*],
    [*World*]
  ),
  table.cell(rowspan: 3, lines(15))
)
