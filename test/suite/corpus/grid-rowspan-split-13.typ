// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-split-13.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Inset moving to next region bug
#set page(width: 10cm, height: 2.5cm, margin: 0.5cm)
#set text(size: 11pt)
#table(
  columns: (1fr, 1fr, 1fr),
  [A],
  [B],
  [C],
  [D],
  table.cell(rowspan: 2, lorem(4)),
  [E],
  [F],
  [G],
)
