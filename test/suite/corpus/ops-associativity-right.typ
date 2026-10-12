// Typst 0.15.1 test suite: tests/suite/scripting/ops.typ, case ops-associativity-right, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Assignment is right-associative.
#{
  let x = 1
  let y = 2
  x = y = "ok"
  test(x, none)
  test(y, "ok")
}
