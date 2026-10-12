// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-size-math-content-2.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Nested math content has styles overwritten by the inner equation.
// Ideally the heights would match the actual height of the sums.
#let sum = $sum^2$
#let height(x) = context measure(x).height
$sum = height(sum) $
$ sum != height(sum) $
