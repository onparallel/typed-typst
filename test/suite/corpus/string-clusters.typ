// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-clusters, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `clusters` and `codepoints` methods.
#test("abc".clusters(), ("a", "b", "c"))
#test("abc".clusters(), ("a", "b", "c"))
#test("🏳️‍🌈!".clusters(), ("🏳️‍🌈", "!"))
