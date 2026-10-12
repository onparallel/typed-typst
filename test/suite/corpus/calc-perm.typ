// Typst 0.15.1 test suite: tests/suite/foundations/calc.typ, case calc-perm, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `perm` function.
#test(calc.perm(0, 0), 1)
#test(calc.perm(5, 3), 60)
#test(calc.perm(5, 5), 120)
#test(calc.perm(5, 6), 0)
