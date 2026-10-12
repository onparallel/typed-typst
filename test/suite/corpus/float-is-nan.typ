// Typst 0.15.1 test suite: tests/suite/foundations/float.typ, case float-is-nan, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test float `is-nan()`.
#test(float(float.nan).is-nan(), true)
#test(float(10).is-nan(), false)
#test(float(calc.inf).is-nan(), false)
#test(float(-calc.inf).is-nan(), false)
