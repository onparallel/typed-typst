// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-non-repeat.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#grid(
  grid.header(repeat: false, [a]),
  [x],
  grid.header(level: 2, repeat: false, [b]),
  ..([y],) * 10,
)
