// Typst 0.15.1 test suite: tests/suite/scripting/loop.typ, case loop-break-join-in-last-arg, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test break in function call.
#let identity(x) = x
#let out = for i in range(5) {
  "A"
  identity({
    "B"
    break
  })
  "C"
}

#test(out, "AB")
