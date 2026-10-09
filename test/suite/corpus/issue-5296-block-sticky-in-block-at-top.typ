// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case issue-5296-block-sticky-in-block-at-top.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 3cm)
#v(1.6cm)
#block(height: 2cm, breakable: true)[
  #block(sticky: true)[*A*]

  b
]
