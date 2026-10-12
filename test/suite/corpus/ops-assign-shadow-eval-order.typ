// Typst 0.15.1 test suite: tests/suite/scripting/ops.typ, case ops-assign-shadow-eval-order, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test shadowing a variable while assigning to it and calling a method on it.
#{
  let var = "a"
  var += var.at(0, default: let var = "b")
  test(var, "ba")
}
