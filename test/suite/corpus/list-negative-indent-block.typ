// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-negative-indent-block.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 200pt)
#block[
  #set list(indent: -50pt)
  - #lorem(12)
]
#block[
  #set list(marker: box(width: 100%, height: 1em, fill: red))
  - abc
  #set list(indent: -50pt)
  - abc
]
