// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-contextual-measurement.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that table cells with varying contextual results are properly
// measured.
#let c = counter("c")
#let k = context square(width: c.get().first() * 5pt)
#let u(n) = [#n] + c.update(n)
#table(
  columns: 3,
  u(1), k, u(2),
  k, u(4), k,
  k, k, k,
)
