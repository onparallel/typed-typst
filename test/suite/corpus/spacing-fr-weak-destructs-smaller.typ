// Typst 0.15.1 test suite: tests/suite/layout/spacing.typ, case spacing-fr-weak-destructs-smaller.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Larger fr destructs smaller fr.
#set page(height: 100pt)
0
#v(1fr, weak: true)
#v(2fr, weak: true) // wins
2
#v(2fr, weak: true)
#v(4fr, weak: true) // wins
6
