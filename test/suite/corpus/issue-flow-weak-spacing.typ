// Typst 0.15.1 test suite: tests/suite/layout/flow/flow.typ, case issue-flow-weak-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// In this bug, there was a bit of space below the heading because weak spacing
// directly before a layout-induced column or page break wasn't trimmed.
#set page(height: 60pt)
#rect(inset: 0pt, columns(2)[
  Text
  #v(12pt)
  Hi
  #v(10pt, weak: true)
  At column break.
])
