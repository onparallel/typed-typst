// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case spread-into-array, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test spreading into array and dictionary.
#{
  let l = (1, 2, 3)
  let r = (5, 6, 7)
  test((..l, 4, ..r), range(1, 8))
  test((..none), ())
}
