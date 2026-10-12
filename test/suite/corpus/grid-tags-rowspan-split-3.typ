// Typst 0.15.1 test suite: tests/suite/pdftags/grid.typ, case grid-tags-rowspan-split-3, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 5em)
#grid(
  columns: 2,
  fill: red,
  inset: 0pt,
  grid.cell(fill: orange, rowspan: 10, place(bottom)[*Z*] + [x\ ] * 10 + place(bottom)[*ZZ*]),
  ..([y],) * 10,
  [a], [b],
)
