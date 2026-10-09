// Typst 0.15.1 test suite: tests/suite/layout/pad.typ, case issue-5160-unbreakable-pad.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set block(breakable: false)
#block(width: 100%, pad(x: 20pt, align(right)[A]))
