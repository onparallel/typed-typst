// Typst 0.15.1 test suite: tests/suite/text/space.typ, case space-collapsing-with-h.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test spacing collapsing before spacing.
#set align(right)
A #h(0pt) B #h(0pt) \
A B \
A #h(-1fr) B
