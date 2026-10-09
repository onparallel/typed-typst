// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case grid-cell-breaking.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
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
