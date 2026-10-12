// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-stroke-edge-cases.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test header stroke priority edge case (last header row removed)
#set page(height: 8em)
#table(
  columns: 2,
  stroke: black,
  gutter: (auto, 3pt),
  table.header(
    [c], [d],
  ),
  ..(table.cell(stroke: aqua)[d],) * 8,
)
