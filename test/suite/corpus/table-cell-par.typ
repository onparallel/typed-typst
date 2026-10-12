// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-cell-par.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that table cells aren't considered paragraphs by default.
#show par: highlight

#table(
  columns: 3,
  [A],
  block[B],
  par[C],
)
