// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-sticky-breakable.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that sticky blocks are still breakable.
#set page(height: 60pt)
#block(sticky: true, lines(4))
E
