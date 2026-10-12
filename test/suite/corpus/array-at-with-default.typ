// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-at-with-default, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test default value.
#test((1, 2, 3).at(2, default: 5), 3)
#test((1, 2, 3).at(3, default: 5), 5)
