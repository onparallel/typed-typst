// Typst 0.15.1 test suite: tests/suite/model/divider.typ, case divider-in-container.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test divider in a container.
#set page(width: 200pt)
#box(width: 150pt, stroke: 1pt, inset: 10pt)[
  Content before
  #divider()
  Content after
]
