// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case color-spaces.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The different color spaces.
#let col = rgb(50%, 64%, 16%)
#box(square(size: 9pt, fill: col))
#box(square(size: 9pt, fill: rgb(col)))
#box(square(size: 9pt, fill: oklab(col)))
#box(square(size: 9pt, fill: oklch(col)))
#box(square(size: 9pt, fill: luma(col)))
#box(square(size: 9pt, fill: cmyk(col)))
#box(square(size: 9pt, fill: color.linear-rgb(col)))
#box(square(size: 9pt, fill: color.hsl(col)))
#box(square(size: 9pt, fill: color.hsv(col)))
