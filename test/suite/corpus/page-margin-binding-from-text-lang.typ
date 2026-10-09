// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-margin-binding-from-text-lang.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test setting the binding implicitly.
#set page(margin: (inside: 30pt))
#set text(lang: "he")
#rect(width: 100%)[Bound]
#pagebreak()
#rect(width: 100%)[Right]
