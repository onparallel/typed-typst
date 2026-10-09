// Typst 0.15.1 test suite: tests/suite/visualize/curve.typ, case curve-multiple-non-closed.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#curve(
  stroke: 2pt,
  curve.line((20pt, 0pt)),
  curve.move((0pt,  10pt)),
  curve.line((20pt, 10pt)),
  curve.move((0pt,  20pt)),
  curve.line((20pt, 20pt)),
)
