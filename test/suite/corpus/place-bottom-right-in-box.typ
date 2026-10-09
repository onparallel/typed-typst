// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-bottom-right-in-box.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#box(fill: aqua)[
  #place(bottom + right)[Hi]
  Hello World \
  How are \
  you?
]
