// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-in-columns.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 120pt, columns: 2)

#place(
  top + center,
  float: true,
  scope: "parent",
  clearance: 12pt,
  strong[Title],
)

#lines(3)
#footnote(lines(4, "1"))

#lines(2)
#footnote(lines(2, "1"))
