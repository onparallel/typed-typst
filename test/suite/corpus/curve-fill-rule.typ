// Typst 0.15.1 test suite: tests/suite/visualize/curve.typ, case curve-fill-rule.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#stack(
  dir: ltr,
  curve(
  fill: red,
  fill-rule: "non-zero",
  curve.move((25pt, 0pt)),
  curve.line((10pt, 50pt)),
  curve.line((50pt, 20pt)),
  curve.line((0pt, 20pt)),
  curve.line((40pt, 50pt)),
  curve.close()
  ),
  curve(
    fill: red,
    fill-rule: "even-odd",
    curve.move((25pt, 0pt)),
    curve.line((10pt, 50pt)),
    curve.line((50pt, 20pt)),
    curve.line((0pt, 20pt)),
    curve.line((40pt, 50pt)),
    curve.close()
  )
)
