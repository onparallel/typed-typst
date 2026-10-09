// Typst 0.15.1 test suite: tests/suite/visualize/tiling.typ, case tiling-relative-polygon.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#polygon(
  fill: tiling(relative: "parent", circle(radius: 10pt)),
  stroke: blue,
  (20%, 0pt),
  (60%, 0pt),
  (80%, 20pt),
  (0%,  20pt),
)
