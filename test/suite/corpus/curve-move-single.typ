// Typst 0.15.1 test suite: tests/suite/visualize/curve.typ, case curve-move-single.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#curve(
  stroke: 5pt,
  curve.move((0pt,  30pt)),
  curve.line((30pt, 30pt)),
  curve.line((15pt, 0pt)),
  curve.close()
)
