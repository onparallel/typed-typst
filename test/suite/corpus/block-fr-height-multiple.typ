// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-fr-height-multiple.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt)
#rect(height: 1fr)
#rect()
#block(height: 1fr, line(length: 100%, angle: 90deg))
