// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-clip-text.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test clipping text
#block(width: 5em, height: 2em, clip: false, stroke: 1pt + black)[
  But, soft! what light through
]

#v(2em)

#block(width: 5em, height: 2em, clip: true, stroke: 1pt + black)[
  But, soft! what light through yonder window breaks? It is the east, and Juliet
  is the sun.
]
