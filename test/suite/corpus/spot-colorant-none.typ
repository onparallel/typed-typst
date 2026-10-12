// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case spot-colorant-none.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let c = color.spot(none, red)
#box(square(size: 15pt, fill: c.tint(50%)))
