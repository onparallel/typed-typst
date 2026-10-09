// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-filter, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `filter` method.
#test((:).filter(calc.even), (:))
#test((a: 0, b: 1, c: 2).filter(v => v != 0), (b: 1, c: 2))
#test((a: 0, b: 1, c: 2).filter(calc.even), (a: 0, c: 2))
