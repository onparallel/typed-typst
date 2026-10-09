// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-trim-pattern-str, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `trim` method; the pattern is a string.
#test("aabcaa".trim("a", repeat: false), "abca")
#test("aabca".trim("a", at: start), "bca")
#test("aabcaa".trim("a", at: end, repeat: false), "aabca")
#test(" abc\n".trim("\n"), " abc")
#test("whole".trim("whole", at: start), "")
