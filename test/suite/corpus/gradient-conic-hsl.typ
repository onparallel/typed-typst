// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-conic-hsl.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test in HSL space.
#set page(
  width: 100pt,
  height: 100pt,
  fill: gradient.conic(red, purple, space: color.hsl)
)
