// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-repeating-orphan-prevention.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#v(4.5em)
#grid(
  grid.header(repeat: true, level: 2, [L2]),
  grid.header(repeat: true, level: 4, [L4]),
  [a]
)
