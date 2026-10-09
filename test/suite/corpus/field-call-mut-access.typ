// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case field-call-mut-access, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test calling a mutating method from accessor methods.
#{
  let matrix = (((1,), (2,)), ((3,), (4,)))
  matrix.at(1).at(0).push(5)
  test(matrix, (((1,), (2,)), ((3, 5), (4,))))
}
