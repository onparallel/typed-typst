// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-negative-indent-auto.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto)
#[
  #set list(indent: -50pt)
  - #lorem(20)
]
