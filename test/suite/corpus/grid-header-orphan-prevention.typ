// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-orphan-prevention.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Orphan header prevention test
#set page(height: 12em)
#v(8em)
#grid(
  columns: 3,
  grid.header(
    [*Mui*], [*A*], grid.cell(rowspan: 2, fill: orange)[*B*],
    [*Header*], [*Header* #v(0.1em)]
  ),
  ..([Test], [Test], [Test]) * 20
)
