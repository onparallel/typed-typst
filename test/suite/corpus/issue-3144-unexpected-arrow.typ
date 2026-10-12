// Typst 0.15.1 test suite: tests/suite/scripting/call.typ, case issue-3144-unexpected-arrow, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let f(a: 10) = a(1) + 1
#test(f(a: _ => 5), 6)
