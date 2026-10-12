// Typst 0.15.1 test suite: tests/suite/math/frac.typ, case math-frac-horizontal-lr-paren.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that parentheses are in a left-right pair even when rebuilt by a horizontal fraction
#set math.frac(style: "horizontal")
$ (#v(2em)) / n $
