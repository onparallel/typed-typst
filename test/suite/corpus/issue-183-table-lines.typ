// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case issue-183-table-lines.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure no empty lines before a table that doesn't fit into the first page.
#set page(height: 50pt)

Hello
#table(
  columns: 4,
  [1], [2], [3], [4]
)
