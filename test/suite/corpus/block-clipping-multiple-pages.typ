// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-clipping-multiple-pages.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test block clipping over multiple pages.
#set page(height: 60pt)

First!

#block(height: 4em, clip: true, stroke: 1pt + black)[
  But, soft! what light through yonder window breaks? It is the east, and Juliet
  is the sun.
]
