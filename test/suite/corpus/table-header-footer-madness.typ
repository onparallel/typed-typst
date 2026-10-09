// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-header-footer-madness.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt)
#let c = counter("c")
#let it = context c.get().first() * v(10pt)
#table(
  table.header(c.step()),
  [A],
  [A],
  [A],
  [A],
  [A],
  [A],
  [A],
  table.footer(it),
)
