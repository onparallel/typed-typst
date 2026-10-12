// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-radial-aspect-ratio.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let grad = gradient.radial(
  center: (70%, 30%),
  focal-center: (50%, 50%),
  focal-radius: 10%,
  ..color.map.inferno
).sharp(5)
#grid(
  columns: 2,
  gutter: 5pt,
  rect(width: 70pt, height: 70pt, fill: grad),
  rect(width: 25pt, height: 70pt, fill: grad),
  rect(width: 70pt, height: 25pt, fill: grad),
)
