// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-map, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `map` method.
#test(().map(x => x * 2), ())
#test((a: 2, b: 3).map(x => x * 2), (a: 4, b: 6))
