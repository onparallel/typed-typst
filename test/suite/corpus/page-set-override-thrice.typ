// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-set-override-thrice.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Empty with multiple page styles.
// Should result in a small white page.
#set page("a4")
#set page("a5")
#set page(width: 1cm, height: 1cm)
