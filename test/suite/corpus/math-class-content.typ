// Typst 0.15.1 test suite: tests/suite/math/class.typ, case math-class-content.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test custom content.
#let dotsq = square(
  size: 0.7em,
  stroke: 0.5pt,
  align(center+horizon, circle(radius: 0.15em, fill: black))
)

$ a dotsq b \
  a class("normal", dotsq) b \
  a class("vary", dotsq) b \
  a + class("vary", dotsq) b \
  a class("punctuation", dotsq) b $
