// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-inset-fold.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test inset folding
#set table(inset: 10pt)
#set table(inset: (left: 0pt))

#table(
  fill: red,
  inset: (right: 0pt),
  table.cell(inset: (top: 0pt))[a]
)
