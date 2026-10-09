// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-block-with-fixed-height.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 15em)
#table(
  rows: (auto, 2.5em, auto),
  table.header(
    [*Hello*],
    [*World*]
  ),
  block(width: 2em, height: 20em, fill: red)
)
