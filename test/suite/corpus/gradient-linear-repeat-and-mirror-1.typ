// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-linear-repeat-and-mirror-1.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test repeated gradients.
#rect(
  height: 40pt,
  width: 100%,
  fill: gradient.linear(..color.map.inferno).repeat(2, mirror: true)
)
