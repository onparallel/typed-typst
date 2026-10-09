// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-conic-oklab.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test in Oklab space for reference.
#set page(
  width: 100pt,
  height: 100pt,
  fill: gradient.conic(red, purple, space: oklab)
)
