// Typst 0.15.1 test suite: tests/suite/foundations/float.typ, case float-signum, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test float `signum()`
#test(float(0.0).signum(), 1.0)
#test(float(1.0).signum(), 1.0)
#test(float(-1.0).signum(), -1.0)
#test(float(10.0).signum(), 1.0)
#test(float(-10.0).signum(), -1.0)
#test(float(calc.inf).signum(), 1.0)
#test(float(-calc.inf).signum(), -1.0)
#test(float(float.nan).signum().is-nan(), true)
