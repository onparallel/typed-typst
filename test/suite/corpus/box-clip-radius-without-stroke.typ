// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case box-clip-radius-without-stroke.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test clipping with `radius`, but without `stroke`.
#set page(height: 60pt)

#box(
  radius: 5pt,
  width: 20pt,
  height: 20pt,
  clip: true,
  image("/assets/images/rhino.png", width: 30pt)
)
