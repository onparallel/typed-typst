// Typst 0.15.1 test suite: tests/suite/math/primes.typ, case math-primes-merge-inner-prime, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Don't join t and tr when there is an outer tr prime.
$
  attach(attach(a, tr: '), t: b, tr: c)
  quad
  attach(attach(a, tr: ', t: b), tr: ')
  quad
  attach(attach(a, tr: c, t: b), tr: ')
$
