// Typst 0.15.1 test suite: tests/suite/foundations/calc.typ, case calc-erf, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `erf` function.
#test(calc.erf(0), 0)
#test(calc.erf(1), 0.8427007929497149)
#test(calc.erf(calc.inf), 1)
#test(calc.erf(-1), -calc.erf(1))
