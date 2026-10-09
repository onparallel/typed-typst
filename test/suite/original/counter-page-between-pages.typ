// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-page-between-pages.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The update happens conceptually between the pages.
#set page(numbering: "1", margin: (bottom: 20pt))
A
#pagebreak()
#counter(page).update(5)
#set page(number-align: top + center, margin: (top: 20pt, bottom: 10pt))
B
