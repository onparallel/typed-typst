// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-conic-stroke.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#align(
  center + bottom,
  square(
    size: 50pt,
    fill: black,
    stroke: 10pt + gradient.conic(red, blue)
  )
)
