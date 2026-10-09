// Typst 0.15.1 test suite: tests/suite/layout/spacing.typ, case spacing-fr-weak-versus-fr-block-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Weak fr spacing wins against fr block spacing, just like for weak rel
// spacing.
#set page(height: 100pt)
0
#v(1fr, weak: true)
#block(above: 2fr, below: 0pt, height: 0pt)
1
#v(1fr, weak: true)
2
