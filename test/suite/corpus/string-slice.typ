// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-slice, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `slice` method.
#test("abc".slice(1, 2), "b")
#test("abc🏡def".slice(2, 7), "c🏡")
#test("abc🏡def".slice(2, -2), "c🏡d")
#test("abc🏡def".slice(-3, -1), "de")
#test("x🏡yz".slice(-2, count: 2), "yz")
#test("x🏡yz".slice(-7, count: 7), "x🏡yz")
