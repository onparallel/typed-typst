// Typst 0.15.1 test suite: tests/suite/layout/inline/text.typ, case issue-8372-stretched-glyphs.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto)
#set text(5em)
#let b(body) = {
  box(stroke: red, width: auto, height: 1.5em, {
    set align(center + horizon)
    box(stroke: blue, width: auto, height: auto, body)
  })
}
#b({
  set text(font: ("Noto Color Emoji CBDT Subset", "Libertinus Serif"), fallback: false)
  [A#emoji.checkmark.box]
})
#b({
  // Will use a COLR glyph
  set text(font: ("Noto Color Emoji", "Libertinus Serif"), fallback: false)
  [A#emoji.checkmark.box]
})
