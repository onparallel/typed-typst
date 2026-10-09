// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case spot-color-basic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test basic spot color creation and rendering.
#let pantone = color.spot("PANTONE 2221 C", eastern)
#let tinted = pantone.tint(80%)
#box(square(size: 20pt, fill: tinted))
