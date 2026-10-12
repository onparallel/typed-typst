// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case costs-runt-avoid.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set par(justify: true)

#let sample = [please avoid runts in this text.]

#sample
#pagebreak()
#set text(costs: (runt: 10000%))
#sample
