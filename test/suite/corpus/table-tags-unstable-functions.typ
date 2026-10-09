// Typst 0.15.1 test suite: tests/suite/pdftags/table.typ, case table-tags-unstable-functions, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#pdf.table-summary(
  summary: "The table summary",
  table(
    columns: 2,
    // Exclude the top-left cell from being a header cell.
    table.header(pdf.data-cell[], [Column header]),
    pdf.header-cell(scope: "row")[Row header], [thing]
  )
)
