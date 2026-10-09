// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-conic-center-shifted-2.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#square(
  size: 50pt,
  fill: gradient.conic(..color.map.rainbow, space: color.hsv, center: (90%, 90%)),
)
