// Typst 0.15.1 test suite: tests/suite/foundations/calc.typ, case calc-div-euclid, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `div-euclid` function.
#test(calc.div-euclid(7, 3), 2)
#test(calc.div-euclid(7, -3), -2)
#test(calc.div-euclid(-7, 3), -3)
#test(calc.div-euclid(-7, -3), 3)
#test(calc.div-euclid(2.5, 2), 1)
#test(calc.div-euclid(decimal("7"), decimal("3")), decimal("2"))
#test(calc.div-euclid(decimal("7"), decimal("-3")), decimal("-2"))
#test(calc.div-euclid(decimal("-7"), decimal("3")), decimal("-3"))
#test(calc.div-euclid(decimal("-7"), decimal("-3")), decimal("3"))
#test(calc.div-euclid(decimal("2.5"), decimal("2")), decimal("1"))
