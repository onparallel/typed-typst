// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-repeat-replace-gutter.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#grid(
  gutter: 3pt,
  grid.header([a]),
  [x],
  grid.header(level: 2, [b]),
  ..([y],) * 8,
  grid.header(level: 2, [c]),
  ..([z],) * 4,
)
