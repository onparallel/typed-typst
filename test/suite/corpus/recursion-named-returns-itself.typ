// Typst 0.15.1 test suite: tests/suite/scripting/recursion.typ, case recursion-named-returns-itself, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test capturing with named function.
#let f = 10
#let f() = f
#test(type(f()), function)
