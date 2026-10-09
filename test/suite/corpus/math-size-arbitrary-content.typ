// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-size-arbitrary-content.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test sizing of both relative and absolute non math content in math sizes.
#let stuff = square(inset: 0pt)[hello]
#let square = square(size: 5pt)
$ stuff sum^stuff_square square $
