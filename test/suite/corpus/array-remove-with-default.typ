// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-remove-with-default, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test remove with default value.

#{
  let array = (1, 2, 3)
  test(array.remove(2, default: 5), 3)
}

#{
  let array = (1, 2, 3)
  test(array.remove(3, default: 5), 5)
}
