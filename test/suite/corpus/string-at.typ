// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-at, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `at` method.
#test("Hello".at(1), "e")
#test("Hello".at(4), "o")
#test("Hello".at(-1), "o")
#test("Hello".at(-2), "l")
#test("Hey: 🏳️‍🌈 there!".at(5), "🏳️‍🌈")
