// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-conic-angled-aspect-ratio.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let grad = gradient.conic(center: (70%, 30%), angle: 135deg, ..color.map.inferno)
#grid(
  columns: 2,
  gutter: 5pt,
  rect(width: 70pt, height: 70pt, fill: grad),
  rect(width: 25pt, height: 70pt, fill: grad),
  rect(width: 70pt, height: 25pt, fill: grad),
)
