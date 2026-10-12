// Typst 0.15.1 test suite: tests/suite/math/cases.typ, case math-cases, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
$ f(x, y) := cases(
  1 quad &"if" (x dot y)/2 <= 0,
  2 &"if" x divides 2,
  3 &"if" x in NN,
  4 &"else",
) $
