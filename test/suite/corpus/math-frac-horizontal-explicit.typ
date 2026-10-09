// Typst 0.15.1 test suite: tests/suite/math/frac.typ, case math-frac-horizontal-explicit, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that explicit fractions don't change parentheses
#set math.frac(style: "horizontal")
$ frac(a, (b + c)), frac(a, b + c) $
