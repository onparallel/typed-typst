// Typst 0.15.1 test suite: tests/suite/layout/spacing.typ, case spacing-fr-weak-collapse.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Fractional weak spacing should collapse like rel weak spacing.
#set page(height: 100pt)
0
#v(1fr, weak: true)
#v(1fr, weak: false)
1
#v(1fr, weak: false)
