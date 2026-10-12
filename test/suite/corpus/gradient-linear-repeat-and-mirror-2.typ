// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-linear-repeat-and-mirror-2.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#rect(
  height: 40pt,
  width: 100%,
  fill: gradient.linear(..color.map.rainbow).repeat(2, mirror: true),
)
