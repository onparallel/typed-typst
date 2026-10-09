// Typst 0.15.1 test suite: tests/suite/visualize/curve.typ, case curve-cubic-inflection.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 120pt)
#curve(
  fill: blue.lighten(80%),
  stroke: blue,
  curve.move((30%, 0%)),
  curve.cubic((10%, 0%), (10%, 60%), (30%, 60%)),
  curve.cubic(none, (110%, 0%), (50%, 30%)),
  curve.cubic((110%, 30%), (65%, 30%), (30%, 0%)),
  curve.close(mode: "straight")
)
