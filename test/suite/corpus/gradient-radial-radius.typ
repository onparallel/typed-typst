// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-radial-radius.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#square(
  size: 50pt,
  fill: gradient.radial(..color.map.rainbow, space: color.hsl, radius: 10%),
)
#square(
  size: 50pt,
  fill: gradient.radial(..color.map.rainbow, space: color.hsl, radius: 72%),
)
