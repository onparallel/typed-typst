// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-insert, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test insert.
#{
  let dict = (a: 1, b: 2)
  dict.insert("b", 3)
  test(dict, (a: 1, b: 3))
  dict.insert("c", 5)
  test(dict, (a: 1, b: 3, c: 5))
}
