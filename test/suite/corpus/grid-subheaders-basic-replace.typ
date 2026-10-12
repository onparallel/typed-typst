// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-basic-replace.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  grid.header([a]),
  [x],
  grid.header(level: 2, [b]),
  [y],
  grid.header(level: 2, [c]),
  [z],
)
