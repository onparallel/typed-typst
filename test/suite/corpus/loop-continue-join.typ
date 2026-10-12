// Typst 0.15.1 test suite: tests/suite/scripting/loop.typ, case loop-continue-join, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test joining with continue.

#let x = for i in range(5) {
  "a"
  if calc.rem(i, 3) == 0 {
    "_"
    continue
  }
  str(i)
}

#test(x, "a_a1a2a_a4")
