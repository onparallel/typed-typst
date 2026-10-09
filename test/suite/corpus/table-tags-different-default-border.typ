// Typst 0.15.1 test suite: tests/suite/pdftags/table.typ, case table-tags-different-default-border, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  columns: 2,
  stroke: red + 2pt,
  table.hline(stroke: black),
  [a], [b],
  [c], [d],
  [e], [f],
  table.hline(stroke: black),
)
