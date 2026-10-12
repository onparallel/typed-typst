// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case issue-3154-array-at-out-of-bounds-default, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#{
  let array = (1,)
  test(array.at(1, default: 0), 0)
}
