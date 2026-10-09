// Typst 0.15.1 test suite: tests/suite/scripting/return.typ, case return-in-first-arg, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that the expression is evaluated to the end.
#let sum(..args) = {
  let s = 0
  for v in args.pos() {
    s += v
  }
  s
}

#let f() = {
  sum(..return, 1, 2, 3)
  "nope"
}

#test(f(), 6)
