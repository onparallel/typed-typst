// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-repeat-replace-short-lived.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// No orphan prevention for short-lived headers
// (followed by replacing headers).
#set page(height: 8em)
#grid(
  grid.header([a]),
  grid.header(level: 2, [b]),
  grid.header(level: 2, [c]),
  grid.header(level: 2, [d]),
  grid.header(level: 2, [e]),
  grid.header(level: 2, [f]),
  grid.header(level: 2, [g]),
  grid.header(level: 2, [h]),
  grid.header(level: 2, [i]),
  grid.header(level: 2, [j]),
  grid.header(level: 3, [k]),
  ..([z],) * 10,
)
