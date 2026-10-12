// Typst 0.15.1 test suite: tests/suite/scripting/loop.typ, case loop-break-join-basic, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test joining with break.

#let i = 0
#let x = while true {
  i += 1
  str(i)
  if i >= 5 {
    "."
    break
  }
}

#test(x, "12345.")
