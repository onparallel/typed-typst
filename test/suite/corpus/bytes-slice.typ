// Typst 0.15.1 test suite: tests/suite/foundations/bytes.typ, case bytes-slice, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `slice` method.
#test(bytes("abcd").slice(2), bytes("cd"))
#test(bytes("abcd").slice(0, 3), bytes("abc"))
#test(bytes("abcd").slice(1, -1), bytes("bc"))
#test(bytes("abcd").slice(3, 3), bytes(""))
#test(bytes("abcd").slice(3, 0), bytes(""))
#test(bytes("abcd").slice(-2), bytes("cd"))
#test(bytes("abcd").slice(-3, 2), bytes("b"))
#test(bytes("abcd").slice(-3, -1), bytes("bc"))
#test(bytes("abcd").slice(-2, -2), bytes(""))
#test(bytes("abcd").slice(1, count: 3), bytes("bcd"))
#test(bytes("abcd").slice(-3, count: 3), bytes("bcd"))
#test(bytes("abcd").slice(2, count: 0), bytes(""))
