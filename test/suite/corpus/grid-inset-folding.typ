// Typst 0.15.1 test suite: tests/suite/layout/grid/styling.typ, case grid-inset-folding.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test inset folding
#set grid(inset: 10pt)
#set grid(inset: (left: 0pt))

#grid(
  fill: red,
  inset: (right: 0pt),
  grid.cell(inset: (top: 0pt))[a]
)
