// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-remove-order, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that removal keeps order.
#let dict = (a: 1, b: 2, c: 3, d: 4)
#test(dict.remove("b"), 2)
#test(dict.keys(), ("a", "c", "d"))
