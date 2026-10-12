// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-too-large-non-repeating-orphan-before-auto.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#grid(
  grid.header([1]),
  grid.header([a\ ] * 2, level: 2, repeat: false),
  grid.header([2], level: 3),
  [b\ b\ b],
)
