// Typst 0.15.1 test suite: tests/suite/pdftags/grid.typ, case grid-tags-cell-breaking, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The second paragraph contains marked content from page 1 and 2
#set page(width: 5cm, height: 3cm)
#grid(
  columns: 2,
  row-gutter: 8pt,
  [Lorem ipsum dolor sit amet.

  Aenean commodo ligula eget dolor. Aenean massa. Penatibus et magnis.],
  [Text that is rather short],
  [Fireflies],
  [Critical],
  [Decorum],
  [Rampage],
)
