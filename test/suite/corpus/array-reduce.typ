// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-reduce, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `reduce` method.
#test(().reduce(grid), none)
#test((1, 2, 3, 4).reduce((s, x) => s + x), 10)
