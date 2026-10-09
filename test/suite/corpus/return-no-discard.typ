// Typst 0.15.1 test suite: tests/suite/scripting/return.typ, case return-no-discard, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that returning the joined content is not a warning.
#let f() = {
  state("hello").update("world")
  return
}

#test(f(), state("hello").update("world"))
