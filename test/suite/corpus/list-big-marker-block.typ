// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-big-marker-block.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 200pt)
#block[
  #set list(indent: 100pt)
  - #lorem(12)
]
#block[
  #set list(marker: [AAAAAAAAAAAAAAAAAAAAA])
  - #lorem(12)
]
