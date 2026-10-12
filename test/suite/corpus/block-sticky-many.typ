// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-sticky-many.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 80pt)
#set block(sticky: true)
#block[A]
#block[B]
#block[C]
#block[D]
E
#block[F]
#block[G]
