// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-call-followed-by-pagebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Just page followed by pagebreak.
// Should result in one forest-colored A11 page and one auto-sized page.
#page("a11", flipped: true, fill: forest)[]
#pagebreak()
