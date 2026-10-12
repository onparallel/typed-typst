// Typst 0.15.1 test suite: tests/suite/math/frac.typ, case math-frac-line-fill-stroke, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that the horizontal stroke is also decorated like text glyphs
#text(size: 20pt, fill: yellow, stroke: red + .5pt)[$1/Delta$]
#text(size: 25pt, stroke: red)[$1/Delta$]
