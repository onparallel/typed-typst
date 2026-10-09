// Typst 0.15.1 test suite: tests/suite/scripting/recursion.typ, case recursion-shadowing, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test redefinition.
#let f(x) = "hello"
#let f(x) = if x != none { f(none) } else { "world" }
#test(f(1), "world")
