// Typst 0.15.1 test suite: tests/suite/visualize/circle.typ, case circle-sizing-options.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test different ways of sizing.
#set page(width: 120pt, height: 40pt)
#stack(
  dir: ltr,
  spacing: 2pt,
  circle(radius: 5pt),
  circle(width: 10%),
  circle(height: 50%),
)
