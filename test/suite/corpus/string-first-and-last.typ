// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-first-and-last, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `first` and `last` methods.
#test("Hello".first(), "H")
#test("Hello".last(), "o")
#test("🏳️‍🌈A🏳️‍⚧️".first(), "🏳️‍🌈")
#test("🏳️‍🌈A🏳️‍⚧️".last(), "🏳️‍⚧️")
#test("hey".first(default: "d"), "h")
#test("".first(default: "d"), "d")
#test("hey".last(default: "d"), "y")
#test("".last(default: "d"), "d")
