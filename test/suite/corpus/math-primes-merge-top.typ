// Typst 0.15.1 test suite: tests/suite/math/primes.typ, case math-primes-merge-top, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test prime attachment merging with the top field.
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}
$
               attach(a, tr: ', t: b)
  &quad attach(attach(a, tr: '), t: b)
  &quad attach(attach(a, t: b), tr: ')
  &quad attach(attach(attach(a, tl: '), t: b), tr: ')
  &quad attach(attach(attach(a, tr: '), t: b), tr: ')
  \
  // When the base has limits, top prime merging is invariant of t/tr order.
               attach(product, tr: ', t: b)
  &quad attach(attach(product, tr: '), t: b)
  &quad attach(attach(product, t: b), tr: ')
  &quad attach(attach(attach(product, tl: '), t: b), tr: ')
  &quad attach(attach(attach(product, tr: '), t: b), tr: ')
$
