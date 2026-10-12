// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-relative-row-sizes.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Relative lengths
#set page(height: 10em)
#table(
  rows: (30%, 30%, auto),
  table.header(
    [*A*],
    [*B*]
  ),
  [C],
  [C]
)
