// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case issue-5262-block-negative-height-in-flow.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The contents after the block should be pushed upwards.
#set page(height: 60pt)
a
#block(height: -25pt)[b]
c
