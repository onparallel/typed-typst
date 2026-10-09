// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case issue-6068-curve-stroke-gradient.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let stroke = gradient.linear(blue, red).sharp(2)
#line(start: (0pt, 0pt), end: (100pt, 0pt), stroke: stroke)
#curve(curve.line((100pt, 0pt)), stroke: stroke)
#curve(curve.quad(none, (100pt, 0pt)), stroke: stroke)
#curve(
  curve.quad(none, (100pt, 0pt)),
  curve.quad(none, (100pt, 10pt)),
  stroke: stroke
)
#line(start: (10pt, 0pt), end: (90pt, 0pt), stroke: stroke)
#curve(
  curve.move((10pt, 0pt)),
  curve.quad(none, (90pt, 0pt)),
  curve.quad(none, (90pt, 10pt)),
  stroke: stroke
)
