// Typst 0.15.1 test suite: tests/suite/layout/spacing.typ, case spacing-weak-versus-block-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Weak spacing wins against block spacing.
0
#v(1cm, weak: true)
#block(above: 2cm, below: 0pt, height: 0pt)
1
#v(1cm, weak: true)
2
