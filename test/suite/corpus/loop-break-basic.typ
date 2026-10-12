// Typst 0.15.1 test suite: tests/suite/scripting/loop.typ, case loop-break-basic, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test break.

#let var = 0
#let error = false

#for i in range(10) {
  var += i
  if i > 5 {
    break
    error = true
  }
}

#test(var, 21)
#test(error, false)
