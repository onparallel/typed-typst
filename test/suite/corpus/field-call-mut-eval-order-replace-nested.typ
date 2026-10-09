// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case field-call-mut-eval-order-replace-nested, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether replacing a nested field while accessing it causes an error.
#{
  let dict = (one: (two: ()))
  dict.one.two.insert("three", dict.insert("one", (two: (:))))
  test(dict.one, (two: (three: none)))
}
