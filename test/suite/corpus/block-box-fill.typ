// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-box-fill.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt)
#let words = lorem(18).split()
#block(inset: 8pt, width: 100%, fill: aqua, stroke: aqua.darken(30%))[
  #words.slice(0, 13).join(" ")
  #box(fill: teal, outset: 2pt)[tempor]
  #words.slice(13).join(" ")
]
