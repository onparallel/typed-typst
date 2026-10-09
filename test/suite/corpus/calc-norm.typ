// Typst 0.15.1 test suite: tests/suite/foundations/calc.typ, case calc-norm, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(calc.norm(1, 2, -3, 0.5), calc.sqrt(14.25))
#test(calc.norm(3, 4), 5.0)
#test(calc.norm(3, 4), 5.0)
#test(calc.norm(), 0.0)
#test(calc.norm(p: 3, 1, -2), calc.pow(9, 1/3))
#test(calc.norm(p: calc.inf, 1, -2), 2.0)
#test(calc.norm(p: 309, 10), 10)
#test(calc.norm(p: 2, 0), 0)
#test(calc.norm(p: 100, 1210), 1210)
