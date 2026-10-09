// Typst 0.15.1 test suite: tests/suite/layout/spacing.typ, case spacing-fr-weak-survives-with-strong.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Weak fr survives with strong fr, like weak rel survives with strong rel.
#set page(height: 100pt)
#v(1fr, weak: false)
#v(1fr, weak: true)
2
#v(1fr, weak: false)
#v(2fr, weak: true)
4
