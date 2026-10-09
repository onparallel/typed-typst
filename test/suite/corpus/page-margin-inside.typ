// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-margin-inside.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: (inside: 30pt))
#rect(width: 100%)[Bound]
#pagebreak()
#rect(width: 100%)[Left]
