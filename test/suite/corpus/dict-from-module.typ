// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-from-module, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test dictionary constructor
#test(type(dictionary(sys).at("version")), version)
#test(dictionary(sys).at("no-crash", default: none), none)
