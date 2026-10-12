// Typst 0.15.1 test suite: tests/suite/visualize/tiling.typ, case tiling-stroke.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test tiling on strokes
#align(
  center + top,
  square(
    size: 50pt,
    fill: tiling(
      size: (5pt, 5pt),
      align(horizon + center, circle(fill: blue, radius: 2.5pt))
    ),
    stroke: 7.5pt + tiling(
      size: (5pt, 5pt),
      align(horizon + center, circle(fill: red, radius: 2.5pt))
    )
  )
)
