// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-filter, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `filter` method.
#test(().filter(calc.even), ())
#test((1, 2, 3, 4).filter(calc.even), (2, 4))
#test((7, 3, 2, 5, 1).filter(x => x < 5), (3, 2, 1))
