// Typst 0.15.1 test suite: tests/suite/scripting/return.typ, case return-discard-loop, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that return from within a control flow construct is not a warning.
#let f1() = {
  state("hello").update("world")
  for x in range(3) {
    return "nope1"
  }
}

#let f2() = {
  state("hello").update("world")
  let i = 0
  while i < 10 {
    return "nope2"
  }
}

#test(f1(), "nope1")
#test(f2(), "nope2")
