// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case str-constructor, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test conversion to string.
#test(str(123), "123")
#test(str(123, base: 3), "11120")
#test(str(-123, base: 16), "−7b")
#test(str(int.max, base: 36), "1y2p0ij32e8e7")
#test(str(50.14), "50.14")
#test(str(10 / 3).len() > 10, true)
