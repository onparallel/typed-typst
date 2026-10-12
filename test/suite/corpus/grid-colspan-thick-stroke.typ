// Typst 0.15.1 test suite: tests/suite/layout/grid/colspan.typ, case grid-colspan-thick-stroke.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 300pt)
#table(
  columns: (2em, 2em, auto, auto),
  stroke: 5pt,
  [A], [B], [C], [D],
  table.cell(colspan: 4, lorem(20)),
  [A], table.cell(colspan: 2)[BCBCBCBC], [D]
)
