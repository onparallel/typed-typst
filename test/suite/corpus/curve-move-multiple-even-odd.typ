// Typst 0.15.1 test suite: tests/suite/visualize/curve.typ, case curve-move-multiple-even-odd.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#curve(
  fill: yellow,
  stroke: yellow.darken(20%),
  fill-rule: "even-odd",
  curve.move((10pt, 10pt)),
  curve.line((20pt, 10pt)),
  curve.line((20pt, 20pt)),
  curve.close(),
  curve.move((0pt, 5pt)),
  curve.line((25pt, 5pt)),
  curve.line((25pt, 30pt)),
  curve.close(mode: "smooth"),
)
