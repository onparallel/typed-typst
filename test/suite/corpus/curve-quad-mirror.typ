// Typst 0.15.1 test suite: tests/suite/visualize/curve.typ, case curve-quad-mirror.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#curve(
  stroke: 2pt,
  curve.quad((20pt, 40pt), (40pt, 40pt), relative: true),
  curve.quad(auto, (40pt, -40pt), relative: true),
)
