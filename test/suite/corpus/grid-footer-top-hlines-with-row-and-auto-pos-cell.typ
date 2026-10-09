// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-top-hlines-with-row-and-auto-pos-cell.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: 2pt)
#set text(6pt)
#table(
  columns: 3,
  inset: 2.5pt,
  table.footer(
    table.hline(stroke: red),
    table.vline(stroke: blue),
    table.cell(x: 2, y: 2)[a],
    [b],
    table.hline(stroke: 3pt),
    table.vline(stroke: 3pt),
  )
)
