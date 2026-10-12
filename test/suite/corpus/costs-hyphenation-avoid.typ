// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case costs-hyphenation-avoid.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set par(justify: true)

#let sample = [we've increased the hyphenation cost.]

#sample
#pagebreak()
#set text(costs: (hyphenation: 10000%))
#sample
