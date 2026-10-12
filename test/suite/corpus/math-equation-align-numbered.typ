// Typst 0.15.1 test suite: tests/suite/math/equation.typ, case math-equation-align-numbered, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test numbered
#let eq(alignment) = {
  show math.equation: set align(alignment)
  $ a + b = c $
}

#set math.equation(numbering: "(1)")

#eq(center)
#eq(left)
#eq(right)

#set text(dir: rtl)
#eq(start)
#eq(end)
