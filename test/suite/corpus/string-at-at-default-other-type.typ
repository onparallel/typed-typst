// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-at-at-default-other-type, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test("Hello".at(5, default: (a: 10)), (a: 10))
