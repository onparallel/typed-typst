// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-remove-with-default, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test remove with default value.
#{
  let dict = (a: 1, b: 2)
  test(dict.remove("b", default: 3), 2)
}

#{
  let dict = (a: 1, b: 2)
  test(dict.remove("c", default: 3), 3)
}
