// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-page-footer-only-update.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Footer should be affected by default.
#set page(numbering: "1 / 1", margin: (bottom: 20pt))
#counter(page).update(5)
