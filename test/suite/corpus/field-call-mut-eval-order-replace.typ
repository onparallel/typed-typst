// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case field-call-mut-eval-order-replace, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether replacing a field while accessing it causes an error.
#{
  let dict = (one: ())
  dict.one.insert("two", dict.insert("one", (:)))
  test(dict.one, (two: none))
}
