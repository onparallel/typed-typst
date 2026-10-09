// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-math-radial.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test radial gradient
#show math.equation: set text(fill: gradient.radial(..color.map.rainbow, center: (30%, 30%)))
#show math.equation: box

$ A = mat(
  1, 2, 3;
  4, 5, 6;
  7, 8, 9
) $
