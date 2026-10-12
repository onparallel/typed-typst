// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-intersperse, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `intersperse` method
#test(().intersperse("a"), ())
#test((1,).intersperse("a"), (1,))
#test((1, 2).intersperse("a"), (1, "a", 2))
#test((1, 2, "b").intersperse("a"), (1, "a", 2, "a", "b"))
