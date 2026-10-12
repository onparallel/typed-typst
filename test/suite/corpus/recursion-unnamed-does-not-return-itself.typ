// Typst 0.15.1 test suite: tests/suite/scripting/recursion.typ, case recursion-unnamed-does-not-return-itself, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test capturing with unnamed function.
#let f = 10
#let f = () => f
#test(type(f()), int)
