// Typst 0.15.1 test suite: tests/suite/pdftags/table.typ, case table-tags-rowspan-split-2, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 6em)
#table(
  rows: (4em, auto, 4em),
  columns: 3,
  [a1], table.cell(rowspan: 3, [b\ ] * 5), [c1],
  [a2], [c2],
  [a3], [c3],
)
