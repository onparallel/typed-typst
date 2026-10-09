// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-lack-of-space.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test lack of space for header + text.
#set page(height: 8em)

#table(
  rows: (auto, 2.5em, auto, auto, 10em),
  gutter: 3pt,
  table.header(
    [*Hello*],
    [*World*]
  ),
  table.cell(rowspan: 3, lorem(80))
)
