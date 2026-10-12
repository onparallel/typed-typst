// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-numbering-huge.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: (bottom: 20pt, rest: 0pt))
#let filler = lines(1)

// Test values greater than 32-bits
#set page(numbering: "1/1")
#counter(page).update(100000000001)
#pagebreak()
#pagebreak()
