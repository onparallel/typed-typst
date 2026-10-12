// Typst 0.15.1 test suite: tests/suite/foundations/calc.typ, case calc-lcm, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `lcm` function.
#test(calc.lcm(112, 77), 1232)
#test(calc.lcm(12, 96), 96)
#test(calc.lcm(13, 9), 117)
#test(calc.lcm(13, -9), 117)
#test(calc.lcm(272557, 272557), 272557)
#test(calc.lcm(0, 0), 0)
#test(calc.lcm(8, 0), 0)
