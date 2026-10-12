// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-set-override-and-mix.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Empty with multiple page styles.
// Should result in one eastern-colored A11 page.
#set page("a4")
#set page("a5")
#set page("a11", flipped: true, fill: eastern)
#set text(font: "Roboto", white)
#smallcaps[Typst]
