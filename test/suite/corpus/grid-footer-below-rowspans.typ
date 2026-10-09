// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-below-rowspans.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Footer should go below the rowspans.
#set page(margin: 2pt)
#set text(6pt)
#table(
  columns: 2,
  inset: 1.5pt,
  table.cell(rowspan: 2)[a], table.cell(rowspan: 2)[b],
  table.footer()
)
