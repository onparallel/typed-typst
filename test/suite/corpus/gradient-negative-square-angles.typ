// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-negative-square-angles.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(columns: 12, ..for i in range(-24,24){(
  rect(width: 3mm, height: 3mm, fill: gradient.linear(yellow, black, angle: i * 15deg).sharp(3)),
)})
