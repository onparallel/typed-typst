// Typst 0.15.1 test suite: tests/suite/layout/flow/invisibles.typ, case flow-first-region-zero-sized-item.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// In-flow item with size zero in the first region.
#set page(height: 5cm, margin: 1cm)
In-flow, zero-sized item.
#block(breakable: true, stroke: 1pt, inset: 0.4cm)[
  #set block(spacing: 0pt)
  #line(length: 0pt)
  #rect(height: 2cm, fill: gray)
  #line(length: 100%)
]
