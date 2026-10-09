// Typst 0.15.1 test suite: tests/suite/scripting/params.typ, case params-sink-unnamed-empty, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Unnamed sink should just ignore any extra arguments.
#{
  let f(a, b: 5, ..) = (a, b)
  test(f(4), (4, 5))
  test(f(10, b: 11), (10, 11))
  test(f(13, 20, b: 12), (13, 12))
  test(f(15, b: 16, c: 13), (15, 16))
}
