// Typst 0.15.1 test suite: tests/suite/foundations/float.typ, case float-is-infinite, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test float `is-infinite()`.
#test(float(calc.inf).is-infinite(), true)
#test(float(-calc.inf).is-infinite(), true)
#test(float(10).is-infinite(), false)
#test(float(-10).is-infinite(), false)
#test(float(float.nan).is-infinite(), false)
