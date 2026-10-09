// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case color-outside-srgb-gamut.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Colors outside the sRGB gamut.
#box(square(size: 9pt, fill: oklab(90%, -0.2, -0.1)))
#box(square(size: 9pt, fill: oklch(50%, 0.5, 0deg)))
