// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-consistent-width.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that block enforces consistent width across regions. Also use some
// introspection to check that measurement is working correctly.
#block(stroke: 1pt, inset: 5pt)[
  #align(right)[Hi]
  #colbreak()
  Hello @netwok
]

#show bibliography: none
#bibliography("/assets/bib/works.bib")
