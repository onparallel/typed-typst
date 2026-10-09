// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-linear-angled.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test gradients with direction.
#set page(width: 90pt)
#grid(
  gutter: 3pt,
  columns: 4,
  ..range(0, 360, step: 15).map(i => box(
    height: 15pt,
    width: 15pt,
    fill: gradient.linear(angle: i * 1deg, (red, 0%), (blue, 100%)),
  ))
)
