// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-cell-set.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Cell set rules
#set table.cell(align: center)
#show table.cell: it => (it.align, it.fill, it.inset)
#set table.cell(inset: 20pt)
#table(
  align: left,
  row-gutter: 5pt,
  [A],
  table.cell(align: right)[B],
  table.cell(fill: aqua)[B],
)
