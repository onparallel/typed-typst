// Typst 0.15.1 test suite: tests/suite/foundations/int.typ, case int-signum, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test int `signum()`
#test(int(0).signum(), 0)
#test(int(1.0).signum(), 1)
#test(int(-1.0).signum(), -1)
#test(int(10.0).signum(), 1)
#test(int(-10.0).signum(), -1)
