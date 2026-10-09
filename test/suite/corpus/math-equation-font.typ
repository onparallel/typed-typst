// Typst 0.15.1 test suite: tests/suite/math/equation.typ, case math-equation-font, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test different font.
#show math.equation: set text(font: "Noto Sans Math")
$ v := vec(1 + 2, 2 - 4, sqrt(3), arrow(x)) + 1 $
