// Typst 0.15.1 test suite: tests/suite/pdftags/table.typ, case table-tags-unset-bottom-line, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  columns: 2,
  [a], [b],
  [c], [d],
  table.hline(stroke: none),
)
