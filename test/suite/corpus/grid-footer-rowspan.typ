// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-rowspan.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// General footer-only tests
#set page(height: 9em)
#table(
  columns: 2,
  [a], [],
  [b], [],
  [c], [],
  [d], [],
  [e], [],
  table.footer(
    [*Ok*], table.cell(rowspan: 2)[test],
    [*Thanks*]
  )
)
