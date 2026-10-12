// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-dict-array-at, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Same here.
#{
  let array = (1, 2, 3, 4)
  (test: array.at(1), best: _) = (test: "baz", best: "brr")
  test(array, (1, "baz", 3, 4))
}
