// Typst 0.15.1 test suite: tests/suite/scripting/call.typ, case call-complex-callee-expression, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Callee expressions.
#{
  // Wrapped in parens.
  test((type)("hi"), str)

  // Call the return value of a function.
  let adder(dx) = x => x + dx
  test(adder(2)(5), 7)
}
