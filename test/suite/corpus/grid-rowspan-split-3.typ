// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-split-3.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 5em)
#table(
  columns: 2,
  fill: red,
  inset: 0pt,
  table.cell(fill: orange, rowspan: 10, place(bottom)[*Z*] + [x\ ] * 10 + place(bottom)[*ZZ*]),
  ..([y],) * 10,
  [a], [b],
)
