// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-rotate-relative-sizing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test relative sizing in rotated boxes.
#set page(width: 200pt, height: 200pt)
#set text(size: 32pt)
#let rotated(body) = box(rotate(
  90deg,
  box(stroke: 0.5pt, height: 20%, clip: true, body)
))

#set rotate(reflow: false)
Hello #rotated[World]!\

#set rotate(reflow: true)
Hello #rotated[World]!
