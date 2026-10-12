// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-top-hlines-with-only-row-pos-cell.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Top hlines should attach to the top of the footer.
#set page(margin: 2pt)
#set text(6pt)
#table(
  columns: 3,
  inset: 2.5pt,
  table.footer(
    table.hline(stroke: red),
    table.vline(stroke: blue),
    table.cell(x: 2, y: 2)[a],
    table.hline(stroke: 3pt),
    table.vline(stroke: 3pt),
  )
)
