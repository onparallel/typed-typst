// Typst 0.15.1 test suite: tests/suite/scripting/closure.typ, case closure-capture-in-lvalue.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Mutable method with capture in argument.
#let x = "b"
#let f() = {
  let a = (b: 5)
  a.at(x) = 10
  a
}
#f()
