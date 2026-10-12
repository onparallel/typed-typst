// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-size-math-content-3.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Sum doesn't get wrapped in math as it is a single expr.
// Ideally the height would match the actual height of the sum.
#let height(x) = context measure(x).height
$ sum != height(sum) $
