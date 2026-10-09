// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-math-underover.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test on underover
#show math.equation: set text(fill: gradient.linear(..color.map.rainbow))
#show math.equation: box

$ underline(X^2) $
$ overline("hello, world!") $
