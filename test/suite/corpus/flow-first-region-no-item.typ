// Typst 0.15.1 test suite: tests/suite/layout/flow/invisibles.typ, case flow-first-region-no-item.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// No item in the first region.
#set page(height: 5cm, margin: 1cm)
No item in the first region.
#block(breakable: true, stroke: 1pt, inset: 0.5cm)[
  #rect(height: 2cm, fill: gray)
]
