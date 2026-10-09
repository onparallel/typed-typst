// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-skew-both-axes.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test skewing along both axes.
#set page(width: 100pt, height: 250pt)
#set text(size: 12pt)
#let skewed(angle) = box(skew(ax: 30deg, ay: angle)[Some Text])

#set skew(reflow: true)
#for angle in range(-30, 31, step: 10) {
  skewed(angle * 1deg)
}
