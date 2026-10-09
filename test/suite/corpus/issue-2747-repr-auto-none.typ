// Typst 0.15.1 test suite: tests/suite/foundations/type.typ, case issue-2747-repr-auto-none, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(repr(none), "none")
#test(repr(auto), "auto")
#test(repr(type(none)), "type(none)")
#test(repr(type(auto)), "type(auto)")
