// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case color-rotate-hue.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test hue rotation.
#let col = rgb(50%, 64%, 16%)

// Oklch
#for x in range(0, 11) {
  box(square(size: 9pt, fill: rgb(col).rotate(x * 36deg)))
}

// HSL
#for x in range(0, 11) {
  box(square(size: 9pt, fill: rgb(col).rotate(x * 36deg, space: color.hsl)))
}

// HSV
#for x in range(0, 11) {
  box(square(size: 9pt, fill: rgb(col).rotate(x * 36deg, space: color.hsv)))
}
