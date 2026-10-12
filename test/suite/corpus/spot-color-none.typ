// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case spot-color-none.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test spot color with name set to none.
#let varnish = color.spot(none, luma(0%))
#let layer = varnish.tint(100%)
#box(square(size: 20pt, fill: layer))
