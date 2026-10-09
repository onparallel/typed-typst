// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-at-default, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test default value.
#test((a: 1, b: 2).at("b", default: 3), 2)
#test((a: 1, b: 2).at("c", default: 3), 3)
