// Typst 0.15.1 test suite: tests/suite/model/link.typ, case link-transformed.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Transformed link.
#set page(height: 60pt)
#let mylink = link("https://typst.org/")[LINK]
My cool #box(move(dx: 0.7cm, dy: 0.7cm, rotate(10deg, scale(200%, mylink))))
