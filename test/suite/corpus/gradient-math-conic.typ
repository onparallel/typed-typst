// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-math-conic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test conic gradient
#show math.equation: set text(fill: gradient.conic(red, blue, angle: 45deg))
#show math.equation: box

$ A = mat(
  1, 2, 3;
  4, 5, 6;
  7, 8, 9
) $
