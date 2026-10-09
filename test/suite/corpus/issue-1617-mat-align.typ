// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case issue-1617-mat-align, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}
$ mat(a, b; c, d) mat(x; y) $

$ x mat(a; c) + y mat(b; d)
  = mat(a x+b y; c x+d y) $

$ mat(
    -d_0, lambda_0, 0, 0, dots;
    mu_1, -d_1, lambda_1, 0, dots;
    0, mu_2, -d_2, lambda_2, dots;
    dots.v, dots.v, dots.v, dots.v, dots.down;
  )
  mat(p_0; p_1; p_2; dots.v) $
