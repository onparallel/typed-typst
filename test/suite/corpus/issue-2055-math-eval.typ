// Typst 0.15.1 test suite: tests/suite/foundations/eval.typ, case issue-2055-math-eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Evaluating a math expr should renders the same as an equation
#eval(mode: "math", "f(a) = cases(a + b\, space space x >= 3,a + b\, space space x = 5)")

$f(a) = cases(a + b\, space space x >= 3,a + b\, space space x = 5)$
