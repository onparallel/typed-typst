// Typst 0.15.1 test suite: tests/suite/foundations/calc.typ, case calc-asinh, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let t(a, b) = assert(calc.abs(a - b) < 1e-6)
#t(calc.asinh(0), 0.0)
#t(calc.asinh(1), calc.ln(1 + calc.sqrt(2)))
