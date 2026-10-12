// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-page-header-before-set-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(numbering: "1", number-align: top + center, margin: (top: 20pt))
A
#counter(page).update(4)
#set page(fill: aqua)
B
