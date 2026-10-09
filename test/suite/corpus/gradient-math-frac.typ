// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-math-frac.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test on frac
#show math.equation: set text(fill: gradient.linear(..color.map.rainbow))
#show math.equation: box

$ nabla dot bold(E) = frac(rho, epsilon_0) $
