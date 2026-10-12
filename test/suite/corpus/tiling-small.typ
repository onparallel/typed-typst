// Typst 0.15.1 test suite: tests/suite/visualize/tiling.typ, case tiling-small.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Tests small tilings for pixel accuracy.
#box(
  width: 8pt,
  height: 1pt,
  fill: tiling(size: (1pt, 1pt), square(size: 1pt, fill: black))
)
#v(-1em)
#box(
  width: 8pt,
  height: 1pt,
  fill: tiling(size: (2pt, 1pt), square(size: 1pt, fill: black))
)
