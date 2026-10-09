// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-not-at-the-top.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 5em)
#v(2em)
#grid(
  [a],
  [b],
  grid.header[*Abc*],
  [d],
  [e],
  [f],
)
