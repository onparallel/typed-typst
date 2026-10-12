// Typst 0.15.1 test suite: tests/suite/foundations/calc.typ, case calc-quo, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `quo` function.
#test(calc.quo(1, 1), 1)
#test(calc.quo(5, 3), 1)
#test(calc.quo(5, -3), -2)
#test(calc.quo(-5, 3), -2)
#test(calc.quo(-5, -3), 1)
#test(calc.quo(6, -3), -2)
#test(calc.quo(-4, 5), -1)
#test(calc.quo(-4, 5.), -1)
#test(calc.quo(22.5, 10), 2)
#test(calc.quo(9, 4.5), 2)
#test(calc.quo(decimal("22.5"), 10), 2)
#test(calc.quo(decimal("9"), decimal("4.5")), 2)
#test(calc.quo(decimal("-9"), decimal("4.1")), -3)
