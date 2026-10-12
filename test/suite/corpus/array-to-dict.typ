// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-to-dict, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `to-dict` method.
#test(().to-dict(), (:))
#test((("a", 1), ("b", 2), ("c", 3)).to-dict(), (a: 1, b: 2, c: 3))
#test((("a", 1), ("b", 2), ("c", 3), ("b", 4)).to-dict(), (a: 1, b: 4, c: 3))
