// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-alone-with-gutter-and-footer-no-orphan-prevention.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 5.5em)
#table(
  gutter: 4pt,
  table.header([L1]),
  table.header(level: 2, [L2]),
  table.footer([a])
)
