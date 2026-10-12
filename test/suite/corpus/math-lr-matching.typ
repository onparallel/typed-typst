// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-matching, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test automatic matching.
#show: it => context {
  set page(width: 122pt) if target() == "paged"
  it
}
$ (a) + {b/2} + abs(a)/2 + (b) $
$f(x/2) < zeta(c^2 + abs(a + b/2))$
