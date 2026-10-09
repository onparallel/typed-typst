// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case spot-color-tints.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test different tint levels of the same spot colorant.
#let pantone = color.spot("PANTONE 185 C", rgb(89.4%, 0.7%, 17%))
#box(square(size: 15pt, fill: pantone.tint(100%)))
#box(square(size: 15pt, fill: pantone.tint(75%)))
#box(square(size: 15pt, fill: pantone.tint(50%)))
#box(square(size: 15pt, fill: pantone.tint(25%)))
#box(square(size: 15pt, fill: pantone.tint(0%)))
