// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case issue-5359-column-override-stays-inside-header.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  columns: 3,
  [Outside],
  table.header(
    [A], table.cell(x: 1)[B], [C],
    table.cell(x: 1)[D],
  ),
)
