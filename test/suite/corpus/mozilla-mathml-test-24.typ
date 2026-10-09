// Typst 0.15.1 test suite: tests/suite/math/mozilla-mathml-test.typ, case mozilla-mathml-test-24, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}
$
  det mat(
    delim: \|,
    c_0, c_1, c_2, dots.c, c_n;
    c_1, c_2, c_3, dots.c, c_(n + 1);
    c_2, c_3, c_4, dots.c, c_(n + 2);
    dots.v, dots.v, dots.v, , dots.v;
    c_n, c_(n + 1), c_(n + 2), dots.c, c_(2 n);
  ) > 0
$
