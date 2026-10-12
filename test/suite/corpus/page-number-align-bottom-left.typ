// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-number-align-bottom-left.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(
  height: 100pt,
  margin: 30pt,
  numbering: "[1]",
  number-align: bottom + left,
)

#block(width: 100%, height: 100%, fill: aqua.lighten(50%))
