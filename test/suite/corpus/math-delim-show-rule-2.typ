// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-delim-show-rule-2, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show math.vec: it => {
  show regex("\\(|\\)"): set text(blue)
  it
}
$ vec(1, 0, 0), mat(1; 0; 0), (1), binom(n, k) $
