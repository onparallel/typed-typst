// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-rowspan-base.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 7em)
#set text(6pt)
#let full-block = block(width: 2em, height: 100%, fill: red)
#table(
  columns: 3,
  inset: 1.5pt,
  table.header(
    [a], full-block, table.cell(rowspan: 2, full-block),
    [b]
  )
)
