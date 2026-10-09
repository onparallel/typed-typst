// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case box-clip-radius.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test clipping with `radius`.
#set page(height: 60pt)

#box(
  radius: 5pt,
  stroke: 2pt + black,
  width: 20pt,
  height: 20pt,
  clip: true,
  image("/assets/images/rhino.png", width: 30pt)
)
