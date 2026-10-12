// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case issue-3154-dict-at-missing-default, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#{
  let dict = (a: 1)
  test(dict.at("b", default: 0), 0)
}
