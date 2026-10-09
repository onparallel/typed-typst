// Typst 0.15.1 test suite: tests/suite/visualize/curve.typ, case issue-curve-in-sized-container.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Curves/Paths used to implement `LayoutMultiple` rather than `LayoutSingle`
// without fulfilling the necessary contract of respecting region expansion.
#block(
  fill: aqua,
  width: 20pt,
  height: 15pt,
  curve(
    curve.move((0pt, 0pt)),
    curve.line((10pt, 10pt)),
  ),
)
