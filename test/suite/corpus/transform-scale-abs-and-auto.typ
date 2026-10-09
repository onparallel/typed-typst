// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-scale-abs-and-auto.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test scaling by absolute lengths and auto.
#set page(width: 200pt, height: 200pt)
#let cylinder = image("/assets/images/cylinder.svg")

#cylinder
#scale(x: 100pt, y: 50pt, reflow: true, cylinder)
#scale(x: auto, y: 50pt, reflow: true, cylinder)
#scale(x: 100pt, y: auto, reflow: true, cylinder)
#scale(x: 150%, y: auto, reflow: true, cylinder)
