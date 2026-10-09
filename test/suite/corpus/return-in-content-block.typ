// Typst 0.15.1 test suite: tests/suite/scripting/return.typ, case return-in-content-block, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test value return from content.
#let x = 3
#let f() = [
  Hello 😀
  #return "nope"
  World
]

#test(f(), "nope")
