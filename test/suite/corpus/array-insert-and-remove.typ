// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-insert-and-remove, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `insert` and `remove` methods.
#{
  let array = (0, 1, 2, 4, 5)
  array.insert(3, 3)
  test(array, range(6))
  _ = array.remove(1)
  test(array, (0, 2, 3, 4, 5))
}
