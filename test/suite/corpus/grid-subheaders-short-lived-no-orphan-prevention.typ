// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-short-lived-no-orphan-prevention.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// No orphan prevention for short-lived headers.
#set page(height: 8em)
#v(5em)
#grid(
  grid.header(level: 2, [b]),
  grid.header(level: 2, [c]),
  [d]
)
