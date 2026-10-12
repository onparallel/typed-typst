// Typst 0.15.1 test suite: tests/suite/math/equation.typ, case math-equation-number-align-right, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set math.equation(numbering: "(1)", number-align: right)

$ a + b = c $

#show math.equation: set align(center)
$ a + b = c $
#show math.equation: set align(left)
$ a + b = c $
#show math.equation: set align(right)
$ a + b = c $

#set text(dir: rtl)
#show math.equation: set align(start)
$ a + b = c $
#show math.equation: set align(end)
$ a + b = c $
