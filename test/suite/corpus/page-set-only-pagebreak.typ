// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-set-only-pagebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Empty with styles and then pagebreak
// Should result in two forest-colored pages.
#set page(fill: forest)
#pagebreak()
