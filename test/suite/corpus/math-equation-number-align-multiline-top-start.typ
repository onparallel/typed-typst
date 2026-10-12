// Typst 0.15.1 test suite: tests/suite/math/equation.typ, case math-equation-number-align-multiline-top-start, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set math.equation(numbering: "(1)", number-align: top+start)

$ p &= ln a b \
    &= ln a + ln b $
$ q &= sum_k k ln a \
    &= sum_k ln A $
