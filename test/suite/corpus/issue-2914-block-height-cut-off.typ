// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case issue-2914-block-height-cut-off.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that breaking a block doesn't shrink its height.
#set page(height: 65pt)
#set block(fill: aqua, width: 25pt, height: 25pt, inset: 5pt)

#block[A]
#block[B]
