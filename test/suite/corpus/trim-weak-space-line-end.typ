// Typst 0.15.1 test suite: tests/suite/layout/spacing.typ, case trim-weak-space-line-end.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Weak space at the end of the line should be removed.
#set align(right)
Hello #h(2cm, weak: true)
