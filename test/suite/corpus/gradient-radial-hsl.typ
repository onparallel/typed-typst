// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-radial-hsl.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#square(
  size: 100pt,
  fill: gradient.radial(..color.map.rainbow, space: color.hsl),
)
