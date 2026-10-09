// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case issue-3154-dict-syntax-missing-mutable, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#{
  let dict = (a: 1)
  dict.b = 9
  test(dict, (a: 1, b: 9))
}
