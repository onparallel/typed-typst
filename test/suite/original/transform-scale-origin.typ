// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-scale-origin.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test setting scaling origin.
#let r = rect(width: 100pt, height: 10pt, fill: forest)
#set page(height: 65pt)
#box(scale(r, x: 50%, y: 200%, origin: left + top))
#box(scale(r, x: 50%, origin: center))
#box(scale(r, x: 50%, y: 200%, origin: right + bottom))
