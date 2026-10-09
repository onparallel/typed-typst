// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-math-root.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test on root
#show math.equation: set text(fill: gradient.linear(..color.map.rainbow))
#show math.equation: box

$ x_"1,2" = frac(-b plus.minus sqrt(b^2 - 4 a c), 2 a) $
