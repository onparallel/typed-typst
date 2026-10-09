// Typst 0.15.1 test suite: tests/suite/visualize/stroke.typ, case stroke-folding.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stroke folding.
#let sq(..args) = box(square(size: 10pt, ..args))

#set square(stroke: none)
#sq()
#set square(stroke: auto)
#sq()
#sq(fill: teal)
#sq(stroke: 2pt)
#sq(stroke: blue)
#sq(fill: teal, stroke: blue)
#sq(fill: teal, stroke: 2pt + blue)
