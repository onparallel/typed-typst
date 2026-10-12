// Typst 0.15.1 test suite: tests/suite/model/list.typ, case issue-6242-tight-list-attach-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Nested tight lists should be uniformly spaced when list spacing is set.
#set list(spacing: 1.2em)
- A
  - B
  - C
- C
