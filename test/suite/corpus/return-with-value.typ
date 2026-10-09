// Typst 0.15.1 test suite: tests/suite/scripting/return.typ, case return-with-value, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test return with value.
#let f(x) = {
  return x + 1
}

#test(f(1), 2)
