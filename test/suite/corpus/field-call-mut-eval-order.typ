// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case field-call-mut-eval-order, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test evaluation order of mutating methods with accessors.
#{
  let pair = (1, 2)
  let arrays = ((), (), ())
  arrays.at(pair.remove(0)).push(pair.remove(0))
  //             ^^^^^^ second (2)    ^^^^^^ first (1)
  test(arrays, ((), (), (1,)))
}
