// Typst 0.15.1 test suite: tests/suite/layout/spacing.typ, case issue-3624-spacing-behaviour.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that metadata after spacing does not force a new paragraph.
#{
  h(1em)
  counter(heading).update(4)
  [Hello ]
  context counter(heading).display()
}
