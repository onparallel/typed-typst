// Typst 0.15.1 test suite: tests/suite/math/syntax.typ, case math-shorthands.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test a few shorthands.
$ underline(f' : NN -> RR) \
  n |-> cases(
    [|1|] &"if" n >>> 10,
    2 * 3 &"if" n != 5,
    1 - 0 thick &...,
  ) $
