// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-header-footer-block-with-fixed-height.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 17em)
#table(
  rows: (auto, 2.5em, auto),
  table.header[*Hello*][*World*],
  block(width: 2em, height: 10em, fill: red),
  table.footer[*Bye*][*World*],
)
