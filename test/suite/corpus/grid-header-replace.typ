// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-replace.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 5em)
#v(1.5em)
#grid(
  grid.header[*Abc*],
  [a],
  [b],
  grid.header[*Def*],
  [d],
  [e],
  [f],
)
