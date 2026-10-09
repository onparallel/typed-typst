// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-rotate.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that rotation impact layout.
#set page(width: 200pt)
#set rotate(reflow: true)

#let one(angle) = box(fill: aqua, rotate(angle)[Test Text])
#for angle in range(0, 360, step: 15) {
  one(angle * 1deg)
}
