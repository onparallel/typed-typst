// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-block-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test how the placed element interacts with paragraph spacing around it.
#set page("a8", height: 60pt)

First

#place(bottom + right)[Placed]

Second
