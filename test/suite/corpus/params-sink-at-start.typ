// Typst 0.15.1 test suite: tests/suite/scripting/params.typ, case params-sink-at-start, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Spread at beginning.
#{
  let f(..a, b) = (a, b)
  test(repr(f(1)), "(arguments(), 1)")
  test(repr(f(1, 2, 3)), "(arguments(1, 2), 3)")
  test(repr(f(1, 2, 3, 4, 5)), "(arguments(1, 2, 3, 4), 5)")
}
