// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-align-spacing-ignorant.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test how ignorant content affects spacing around alignment points.
#let p = place[]
$
  a + & b + & c & e &    + d \
  a + &     & c &   & #p + d
$
