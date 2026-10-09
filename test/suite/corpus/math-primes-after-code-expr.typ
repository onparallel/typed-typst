// Typst 0.15.1 test suite: tests/suite/math/primes.typ, case math-primes-after-code-expr, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test prime symbols after code mode.
#let g = $f$
#let gg = $f$

$
  #(g)' #g' #g ' \
  #g''''''''''''''''' \
  gg'
$
