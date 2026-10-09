// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-relative-row-sizes.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Relative lengths
#set page(height: 10em)
#table(
  rows: (30%, 30%, auto),
  [C],
  [C],
  table.footer[*A*][*B*],
)
