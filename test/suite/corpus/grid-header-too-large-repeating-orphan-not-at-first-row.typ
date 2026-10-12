// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-too-large-repeating-orphan-not-at-first-row.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#grid(
  [b],
  grid.header(
    [a\ ] * 5,
    repeat: true,
  ),
  [c],
)
