// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-negative-indices, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test negative indices.
#{
  let array = (1, 2, 3, 4)
  test(array.at(0), 1)
  test(array.at(-1), 4)
  test(array.at(-2), 3)
  test(array.at(-3), 2)
  test(array.at(-4), 1)
}
