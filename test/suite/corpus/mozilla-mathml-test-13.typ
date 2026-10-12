// Typst 0.15.1 test suite: tests/suite/math/mozilla-mathml-test.typ, case mozilla-mathml-test-13, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}
$ sqrt(1 + sqrt(1 + sqrt(1 + sqrt(1 + sqrt(1 + sqrt(1 + sqrt(1 + x))))))) $
