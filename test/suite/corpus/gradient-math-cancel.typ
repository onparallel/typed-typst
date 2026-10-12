// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-math-cancel.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test on cancel
#show math.equation: set text(fill: gradient.linear(..color.map.rainbow))
#show math.equation: box

$ a dot cancel(5) = cancel(25) 5 x + cancel(5) 1 $
