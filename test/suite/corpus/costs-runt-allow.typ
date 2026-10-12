// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case costs-runt-allow.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set par(justify: true)
#set text(size: 6pt)

#let sample = [a a a a a a a a a a a a a a a a a a a a a a a a a]

#sample
#pagebreak()
#set text(costs: (runt: 0%))
#sample
