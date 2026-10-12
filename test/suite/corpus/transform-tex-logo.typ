// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-tex-logo.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test creating the TeX and XeTeX logos.
#let size = 11pt
#let tex = {
  [T]
  h(-0.14 * size)
  box(move(dy: 0.22 * size)[E])
  h(-0.12 * size)
  [X]
}

#let xetex = {
  [X]
  h(-0.14 * size)
  box(scale(x: -100%, move(dy: 0.26 * size)[E]))
  h(-0.14 * size)
  [T]
  h(-0.14 * size)
  box(move(dy: 0.26 * size)[E])
  h(-0.12 * size)
  [X]
}

#set text(font: "New Computer Modern", size)
Neither #tex, \
nor #xetex!
