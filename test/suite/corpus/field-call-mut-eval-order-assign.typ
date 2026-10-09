// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case field-call-mut-eval-order-assign, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test evaluation order when assigning to a variable in an argument.
#{
  let what = ()
  what.insert("what", what = (:))
  test(what, (what: none))
}
