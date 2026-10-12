// Typst 0.15.1 test suite: tests/suite/layout/columns.typ, case issue-columns-heading.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The well-known columns bug.
#set page(height: 70pt)

Hallo
#columns(2)[
  = A
  Text
  = B
  Text
]
