// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-marginal-style-text-call-around-pagebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(numbering: "1", margin: (bottom: 20pt))
A
#text(red)[
  #pagebreak(weak: true)
  B
]
