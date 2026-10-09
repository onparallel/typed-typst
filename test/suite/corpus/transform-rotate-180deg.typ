// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-rotate-180deg.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that rotation impact layout.
#set page(width: 200pt)
#set rotate(reflow: true)

#let one(angle) = box(fill: aqua, rotate(angle)[Test Text\ Test Text])
#one(0deg)
#one(180deg)

- #one(0deg)
- #one(180deg)
