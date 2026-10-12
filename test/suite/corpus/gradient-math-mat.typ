// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-math-mat.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test on matrix
#show math.equation: set text(fill: gradient.linear(..color.map.rainbow))
#show math.equation: box

$ A = mat(
  1, 2, 3;
  4, 5, 6;
  7, 8, 9
) $
