// Typst 0.15.1 test suite: tests/suite/math/underover.typ, case math-underover-line-fill-stroke.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that the horizontal stroke is also decorated like text glyphs
#text(size: 20pt, fill: yellow, stroke: red + .5pt)[$underline(Delta).overline(Delta)$]
#text(size: 25pt, stroke: red)[$underline(Delta).overline(Delta)$]
