// Typst 0.15.1 test suite: tests/suite/math/equation.typ, case math-equation-number-align-monoline, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set math.equation(numbering: "(1)")
$ p = sum_k k ln a $

#set math.equation(numbering: "(1)", number-align: top)
$ p = sum_k k ln a $

#set math.equation(numbering: "(1)", number-align: bottom)
$ p = sum_k k ln a $
