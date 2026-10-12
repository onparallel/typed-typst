// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-header-counter.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 60pt)
#let c = counter("c")
#table(
  table.header(c.step() + context c.display()),
  [A],
  [A],
)
