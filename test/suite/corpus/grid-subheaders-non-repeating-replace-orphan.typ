// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-non-repeating-replace-orphan.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#grid(
  grid.header([a]),
  [x],
  grid.header(level: 2, [b]),
  ..([y],) * 12,
  grid.header(level: 2, repeat: false, [c]),
  ..([z],) * 10,
)
