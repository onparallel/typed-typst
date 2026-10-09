// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case issue-7398-grid-line-end-oob.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto)
#table(
  columns: 2,
  [A], [B],
  [C], [D],
  table.vline(end: 3),
  table.hline(end: 3),
)
