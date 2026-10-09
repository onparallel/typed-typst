// Typst 0.15.1 test suite: tests/suite/scripting/closure.typ, case closure-without-captures, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Basic closure without captures.
#{
  let adder = (x, y) => x + y
  test(adder(2, 3), 5)
}
