// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 50pt, margin: (bottom: 20pt, rest: 10pt))
#lines(4)
#set page(numbering: "(i)")
#lines(2)
#pagebreak()
#set page(numbering: "1 / 1")
#counter(page).update(1)
#lines(7)
