// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case spread-into-dict, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#{
  let x = (a: 1)
  let y = (b: 2)
  let z = (a: 3)
  test((:..x, ..y, ..z), (a: 3, b: 2))
  test((..(a: 1), b: 2), (a: 1, b: 2))
}
