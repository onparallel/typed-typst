// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-mid, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test middle functions
$ { x mid(|) sum_(i=1)^oo phi_i (x) < 1 } \
  { integral |dot|
      mid(bar.v.double)
    floor(hat(I) mid(slash) { dot mid(|) dot } mid(|) I/n) } $
