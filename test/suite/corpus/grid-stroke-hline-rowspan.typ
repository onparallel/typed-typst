// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case grid-stroke-hline-rowspan.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Red line should be above [c] (hline skips the shortest rowspan).
#set text(6pt)
#table(
  rows: 1em,
  columns: 2,
  inset: 1.5pt,
  table.cell(rowspan: 3)[a], table.cell(rowspan: 2)[b],
  table.hline(stroke: red),
  [c]
)
