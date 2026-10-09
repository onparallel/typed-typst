// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-at-default, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test `at`'s 'default' parameter.
#test("z", "Hello".at(5, default: "z"))
