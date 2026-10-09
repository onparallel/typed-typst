// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-rev, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `rev` method.
#test("abc".rev(), "cba")
#test("ax̂e".rev(), "ex̂a")
