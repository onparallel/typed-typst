// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-top-left-in-box.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#box(fill: aqua)[
  #place(top + left, dx: 50%, dy: 50%)[Hi]
  #v(30pt)
  #line(length: 50pt)
]
