// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-non-repeating-orphan-prevention.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 5em)
#v(2em)
#grid(
  grid.header(repeat: false)[*Abc*],
  [a],
  [b],
  [c],
  [d]
)
