// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-scale.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that scaling impacts layout.
#set page(width: 200pt)
#set text(size: 32pt)
#let scaled(body) = box(scale(
  x: 20%,
  y: 40%,
  body
))

#set scale(reflow: false)
Hello #scaled[World]!

#set scale(reflow: true)
Hello #scaled[World]!
