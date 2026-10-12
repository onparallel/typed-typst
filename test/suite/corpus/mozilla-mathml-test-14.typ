// Typst 0.15.1 test suite: tests/suite/math/mozilla-mathml-test.typ, case mozilla-mathml-test-14, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}
$
  (partial^2 / (partial x^2) + partial^2 / (partial y^2)) abs(phi(x + i y))^2 = 0
$
