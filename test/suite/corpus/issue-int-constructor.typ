// Typst 0.15.1 test suite: tests/suite/foundations/int.typ, case issue-int-constructor, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that integer -> integer conversion doesn't do a roundtrip through float.
#let x = 9223372036854775800
#test(type(x), int)
#test(int(x), x)
