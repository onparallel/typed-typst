// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case spot-colorant-all.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let c = color.spot("all", blue)
#box(square(size: 15pt, fill: c.tint(75%)))
