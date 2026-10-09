// Typst 0.15.1 test suite: tests/suite/foundations/label.typ, case label-after-expression.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test label after expression.
#show strong.where(label: <v>): set text(red)

#let a = [*A*]
#let b = [*B*]
#a <v> #b
