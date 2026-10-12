// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-header-last-child.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// When the header is the last grid child, it shouldn't include the gutter row
// after it, because there is none.
#grid(
  columns: 2,
  gutter: 3pt,
  grid.header(
    [a], [b],
    [c], [d]
  )
)
