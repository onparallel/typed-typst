// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-non-repeating-replace-didnt-fit-once.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#grid(
  grid.header([a]),
  [x],
  grid.header(level: 2, [b]),
  ..([y],) * 10,
  grid.header(level: 2, repeat: false, [c\ c\ c]),
  ..([z],) * 4,
)
