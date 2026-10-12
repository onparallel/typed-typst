// Typst 0.15.1 test suite: tests/suite/visualize/curve.typ, case curve-close-smooth.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#curve(
  fill: blue.lighten(80%),
  stroke: blue,
  curve.move((0pt, 40pt)),
  curve.cubic((0pt, 70pt), (10pt, 80pt), (40pt, 80pt)),
  curve.cubic(auto, (80pt, 70pt), (80pt, 40pt)),
  curve.cubic(auto, (70pt, 0pt), (40pt, 0pt)),
  curve.close(mode: "smooth")
)
