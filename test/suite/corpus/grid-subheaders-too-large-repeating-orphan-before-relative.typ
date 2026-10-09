// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-too-large-repeating-orphan-before-relative.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#grid(
  rows: (auto, auto, auto, 3em),
  grid.header([1]),
  grid.header([a\ ] * 2, level: 2, repeat: true),
  grid.header([2], level: 3),
  rect(width: 10pt, height: 3em, fill: red),
)
