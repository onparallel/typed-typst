// Typst 0.15.1 test suite: tests/suite/layout/stack.typ, case stack-overflow.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test overflow.
#set page(width: 50pt, height: 30pt, margin: 0pt)
#box(stack(
  rect(width: 40pt, height: 20pt, fill: conifer),
  rect(width: 30pt, height: 13pt, fill: forest),
))
