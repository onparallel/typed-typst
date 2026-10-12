// Typst 0.15.1 test suite: tests/suite/layout/spacing.typ, case spacing-fr-weak-with-fr-block.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 150pt)
0
#v(2fr, weak: true)
2
#v(1fr, weak: true)
#block(spacing: 0pt, height: 1fr, fill: aqua)[A]
#v(4fr, weak: true)
8
