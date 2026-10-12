// Typst 0.15.1 test suite: tests/suite/scripting/return.typ, case return-discard-markup, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that discarding markup is not a warning.
#let f() = [
  hello
  #return [nope]
]

#test(f(), [nope])
