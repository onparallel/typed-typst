// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-alone-with-footer-no-orphan-prevention.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 5.3em)
#table(
  table.header([L1]),
  table.header(level: 2, [L2]),
  table.footer([a])
)
