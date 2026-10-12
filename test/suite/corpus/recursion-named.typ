// Typst 0.15.1 test suite: tests/suite/scripting/recursion.typ, case recursion-named, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test with named function.
#let fib(n) = {
  if n <= 2 {
    1
  } else {
    fib(n - 1) + fib(n - 2)
  }
}

#test(fib(10), 55)
