// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-hline-and-vline-2.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Table should be just one row. [c] appears at the third column.
#set page(margin: 2pt)
#set text(6pt)
#table(
  columns: 3,
  inset: 1.5pt,
  table.footer(
    table.cell(y: 0)[a],
    table.hline(stroke: red),
    table.hline(y: 1, stroke: aqua),
    table.cell(y: 0)[b],
    [c]
  )
)
