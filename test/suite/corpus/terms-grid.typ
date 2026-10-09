// Typst 0.15.1 test suite: tests/suite/model/terms.typ, case terms-grid.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test grid like show rule.
#show terms: it => table(
  columns: 2,
  inset: 3pt,
  ..it.children.map(v => (emph(v.term), v.description)).flatten(),
)

/ A: One letter
/ BB: Two letters
/ CCC: Three letters
