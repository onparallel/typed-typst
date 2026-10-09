// Typst 0.15.1 test suite: tests/suite/layout/flow/flow.typ, case issue-flow-trailing-leading.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// In this bug, the first part of the paragraph moved down to the second page
// because trailing leading wasn't trimmed, resulting in an overlarge frame.
#set page(height: 60pt)
#v(19pt)
#block[
  But, soft! what light through yonder window breaks?
  It is the east, and Juliet is the sun.
]
