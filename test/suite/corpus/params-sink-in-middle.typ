// Typst 0.15.1 test suite: tests/suite/scripting/params.typ, case params-sink-in-middle, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Spread in the middle.
#{
  let f(a, ..b, c) = (a, b, c)
  test(repr(f(1, 2)), "(1, arguments(), 2)")
  test(repr(f(1, 2, 3, 4, 5)), "(1, arguments(2, 3, 4), 5)")
}
