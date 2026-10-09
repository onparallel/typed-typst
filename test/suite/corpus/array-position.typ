// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-position, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `position` method.
#test(("Hi", "❤️", "Love").position(s => s == "❤️"), 1)
#test(("Bye", "💘", "Apart").position(s => s == "❤️"), none)
#test(("A", "B", "CDEF", "G").position(v => v.len() > 2), 2)
