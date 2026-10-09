// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case issue-1388-table-row-missing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that a table row isn't wrongly treated like a gutter row.
#set page(height: 70pt)
#table(
  rows: 16pt,
  ..range(6).map(str).flatten(),
)
