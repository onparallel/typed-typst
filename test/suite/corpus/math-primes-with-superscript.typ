// Typst 0.15.1 test suite: tests/suite/math/primes.typ, case math-primes-with-superscript, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test prime symbols don't raise the superscript position
$
  sqrt(f)/f
  sqrt(f^2)/f^2
  sqrt(f'^2)/f'^2
  sqrt(f''_n^2)/f''^2_n
$
