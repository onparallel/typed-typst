// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-len, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `len` method.
#test(().len(), 0)
#test(("A", "B", "C").len(), 3)
