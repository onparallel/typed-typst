// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case spot-color-lighten.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test lighten on spot colors.
#let pantone = color.spot("PANTONE 185 C", rgb(89.4%, 0.7%, 17%))
#let base = pantone.tint(80%)
#let light = base.lighten(25%)
#box(square(size: 15pt, fill: base))
#box(square(size: 15pt, fill: light))
