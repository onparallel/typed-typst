// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-nested-with-footers.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Nested table with footer should repeat both footers
#set page(height: 10em, width: auto)
#table(
  table(
    [a\ b\ c\ d],
    table.footer[b],
  ),
  table.footer[a],
)
