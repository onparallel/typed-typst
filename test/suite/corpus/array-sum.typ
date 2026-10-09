// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-sum, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `sum` method.
#test(().sum(default: 0), 0)
#test(().sum(default: []), [])
#test((1, 2, 3).sum(), 6)
