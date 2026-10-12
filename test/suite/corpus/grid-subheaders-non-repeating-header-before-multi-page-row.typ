// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-non-repeating-header-before-multi-page-row.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 6em)
#grid(
  grid.header(repeat: false, [h]),
  [row #colbreak() row]
)
