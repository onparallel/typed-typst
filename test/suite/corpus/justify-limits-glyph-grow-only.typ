// Typst 0.15.1 test suite: tests/suite/layout/inline/justify.typ, case justify-limits-glyph-grow-only.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(hyphenate: false, overhang: false)
#set par(
  justify: true,
  justification-limits: (
    spacing: (min: 100%, max: 100%),
    tracking: (min: 0em, max: 0.5em)
  )
)

#block(fill: aqua.lighten(50%), width: 100%, lorem(10))
