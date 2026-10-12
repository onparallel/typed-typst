// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-fixed-height.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt)
#set align(center)

#lines(3)
#block(width: 80%, height: 60pt, fill: aqua)
#lines(2)
#block(
  breakable: false,
  width: 100%,
  inset: 4pt,
  fill: aqua,
  lines(3) + colbreak(),
)
