// Typst 0.15.1 test suite: tests/suite/visualize/curve.typ, case curve-line.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#curve(
  fill: purple,
  stroke: 3pt + purple.lighten(50%),
  curve.move((0pt, 0pt)),
  curve.line((30pt, 30pt)),
  curve.line((0pt, 30pt)),
  curve.line((30pt, 0pt)),
)
