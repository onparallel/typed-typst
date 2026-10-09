// Typst 0.15.1 test suite: tests/suite/layout/hide.typ, case issue-622-hide-meta-outline.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(8pt)
#outline()
#set text(2pt)
#hide(block(grid(
  [= A],
  [= B],
  block(grid(
    [= C],
    [= D],
  ))
)))
