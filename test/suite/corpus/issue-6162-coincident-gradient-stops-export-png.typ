// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case issue-6162-coincident-gradient-stops-export-png.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that multiple gradient stops with the same position
// don't cause a panic.
#rect(
  fill: gradient.linear(
    (red, 0%),
    (green, 0%),
    (blue, 100%),
  )
)
#rect(
  fill: gradient.linear(
    (red, 0%),
    (green, 100%),
    (blue, 100%),
  )
)
#rect(
  fill: gradient.linear(
    (white, 0%),
    (red, 50%),
    (green, 50%),
    (blue, 100%),
  )
)
