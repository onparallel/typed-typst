// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-too-large-non-repeating-orphan.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#grid(
  grid.header(
    [a\ ] * 5,
    repeat: false,
  ),
  [b]
)
