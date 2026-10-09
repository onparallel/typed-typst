// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-split, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `split` method.
#test("abc".split(""), ("", "a", "b", "c", ""))
#test("abc".split("b"), ("a", "c"))
#test("a123c".split(regex("\\d")), ("a", "", "", "c"))
#test("a123c".split(regex("\\d+")), ("a", "c"))
