// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-linear-stroke-relative-parent.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The image should look as if there is a single gradient that is being used for
// both the circle stroke and the block fill.
#align(
  center + horizon,
  block(
    width: 50pt,
    height: 50pt,
    fill: gradient.linear(red, blue).sharp(4),
    circle(
      radius: 18pt,
      stroke: 5pt + gradient.linear(red, blue, relative: "parent").sharp(4),
    )
  )
)
