// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case costs-widow-orphan.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 60pt)

#let sample = lorem(12)

#sample
#pagebreak()
#set text(costs: (widow: 0%, orphan: 0%))
#sample
