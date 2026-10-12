// Typst 0.15.1 test suite: tests/suite/pdftags/table.typ, case table-tags-column-and-row-header, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  columns: 3,
  table.header([H1], [H2], [H3]),
  pdf.header-cell(scope: "row")[10:00], [a2], [a3],
  pdf.header-cell(scope: "row")[12:30], [b2], [b3],
)
