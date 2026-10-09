// Typst 0.15.1 test suite: tests/suite/layout/stack.typ, case issue-1240-stack-v-fr.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 60pt)
#stack(
  dir: ltr,
  spacing: 1fr,
  stack([a], 1fr, [b]),
  stack([a], v(1fr), [b]),
)
