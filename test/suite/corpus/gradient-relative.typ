// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-relative, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(gradient.linear(red, green, relative: "self").relative(), "self")
#test(gradient.linear(red, green, relative: "parent").relative(), "parent")
#test(gradient.linear(red, green).relative(), auto)
