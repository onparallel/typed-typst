// Typst 0.15.1 test suite: tests/suite/visualize/tiling.typ, case tiling-relative-stack.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set rect(
  width: 100%,
  height: 20pt,
  fill: tiling(relative: "parent", circle(radius: 10pt)),
)
#stack(spacing: 5pt, rect(), rect())
