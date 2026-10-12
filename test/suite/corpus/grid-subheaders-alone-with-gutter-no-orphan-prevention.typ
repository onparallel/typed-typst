// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-alone-with-gutter-no-orphan-prevention.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 5.3em)
#v(2em)
#grid(
  gutter: 3pt,
  grid.header([L1]),
  grid.header(level: 2, [L2]),
)
