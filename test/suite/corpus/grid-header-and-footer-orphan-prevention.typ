// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-header-and-footer-orphan-prevention.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Orphan header prevention test
#set page(height: 13em)
#v(8em)
#grid(
  columns: 3,
  gutter: 5pt,
  grid.header(
    [*Mui*], [*A*], grid.cell(rowspan: 2, fill: orange)[*B*],
    [*Header*], [*Header* #v(0.1em)],
  ),
  ..([Test], [Test], [Test]) * 7,
  grid.footer(
    [*Mui*], [*A*], grid.cell(rowspan: 2, fill: orange)[*B*],
    [*Footer*], [*Footer* #v(0.1em)],
  ),
)
