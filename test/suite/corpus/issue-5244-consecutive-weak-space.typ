// Typst 0.15.1 test suite: tests/suite/layout/spacing.typ, case issue-5244-consecutive-weak-space.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set par(linebreaks: "optimized")
#{
  [A]
  h(0.3em, weak: true)
  h(0.3em, weak: true)
  [B]
}
