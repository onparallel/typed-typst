// Typst 0.15.1 test suite: tests/suite/visualize/square.typ, case square-circle-overspecified.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that minimum wins if both width and height are given.
#stack(
  dir: ltr,
  spacing: 2pt,
  square(width: 20pt, height: 40pt),
  circle(width: 20%, height: 40pt),
)
