// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-hline-and-vline-1.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Footer should appear at the bottom. Red line should be above the footer.
// Green line should be on the left border.
#set page(margin: 2pt)
#set text(6pt)
#table(
  columns: 2,
  inset: 1.5pt,
  table.cell(y: 0)[a],
  table.cell(x: 1, y: 1)[a],
  table.cell(y: 2)[a],
  table.footer(
    table.hline(stroke: red),
    table.vline(stroke: green),
    [b],
    [c]
  ),
)
