// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-cell-various-overrides.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  columns: 2,
  fill: green,
  align: right,
  [*Name*], [*Data*],
  table.cell(fill: blue)[J.], [Organizer],
  table.cell(align: center)[K.], [Leader],
  [M.], table.cell(inset: 0pt)[Player]
)
