// Typst 0.15.1 test suite: tests/suite/foundations/calc.typ, case calc-acosh, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let t(a, b) = assert(calc.abs(a - b) < 1e-6)
#t(calc.acosh(1), 0.0)
#t(calc.acosh(2), calc.ln(2 + calc.sqrt(3)))
