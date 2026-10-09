// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case str-from-and-to-unicode, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the unicode function.
#test(str.from-unicode(97), "a")
#test(str.to-unicode("a"), 97)
