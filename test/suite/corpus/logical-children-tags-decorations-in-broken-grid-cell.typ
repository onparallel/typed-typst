// Typst 0.15.1 test suite: tests/suite/pdftags/logical-children.typ, case logical-children-tags-decorations-in-broken-grid-cell, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 50pt)
#grid(
  columns: 2,
  underline[
    #lorem(10)
  ],
  overline[
    #lorem(10)
  ],
)
