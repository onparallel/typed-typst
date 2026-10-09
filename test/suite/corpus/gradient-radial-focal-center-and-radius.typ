// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-radial-focal-center-and-radius.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#circle(
  radius: 25pt,
  fill: gradient.radial(white, rgb("#8fbc8f"), focal-center: (35%, 35%), focal-radius: 5%),
)
#circle(
  radius: 25pt,
  fill: gradient.radial(white, rgb("#8fbc8f"), focal-center: (75%, 35%), focal-radius: 5%),
)
