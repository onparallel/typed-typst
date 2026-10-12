// Typst 0.15.1 test suite: tests/suite/math/mozilla-mathml-test.typ, case mozilla-mathml-test-21, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}
$ sum_(p "prime") f(p) = integral_(t > 1) f(t) dif pi(t) $
