// Typst 0.15.1 test suite: tests/suite/visualize/curve.typ, case curve-close-intersection.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#curve(
  fill: yellow,
  stroke: black,
  curve.move((10pt, 10pt)),
  curve.cubic((5pt, 20pt), (15pt, 20pt), (20pt, 0pt), relative: true),
  curve.cubic(auto, (15pt, -10pt), (20pt, 0pt), relative: true),
  curve.close(mode: "straight")
)
