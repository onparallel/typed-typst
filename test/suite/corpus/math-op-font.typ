// Typst 0.15.1 test suite: tests/suite/math/op.typ, case math-op-font, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test with different font.
#let colim = math.op(
  text(font: "IBM Plex Sans", weight: "regular", size: 0.8em)[colim],
  limits: true,
)
$ colim_(x -> 0) inline(colim_(x -> 0)) $
