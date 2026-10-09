// Typst 0.15.1 test suite: tests/suite/pdftags/table.typ, case table-tags-explicit-lines, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  columns: 2,
  [a], table.vline(stroke: green), [b],
  table.hline(stroke: red),
  [c], [d],
  table.hline(stroke: blue),
)
