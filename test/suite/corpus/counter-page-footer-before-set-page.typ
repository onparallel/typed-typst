// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-page-footer-before-set-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(numbering: "1", margin: (bottom: 20pt))
A
#pagebreak()
#counter(page).update(5)
#set page(fill: aqua)
B
