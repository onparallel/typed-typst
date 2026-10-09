// Typst 0.15.1 test suite: tests/suite/math/primes.typ, case math-primes-merge-top-nested, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test prime-top merging with an additional inner attachment.
// The first row should attach as prime-2, the second row as 2-prime.
$
                     attach(a, b: 1, tr: ', t: 2)
  quad        attach(attach(b, b: 1, tr: '), t: 2)
  quad        attach(attach(c, b: 1), tr: ', t: 2)
  quad attach(attach(attach(d, b: 1), tr: '), t: 2)
  \
              attach(attach(e, b: 1, t: 2), tr: ')
  quad attach(attach(attach(f, b: 1), t: 2), tr: ')
$
