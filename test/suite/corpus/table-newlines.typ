// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-newlines.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 70pt)
#set table(fill: (x, y) => if calc.even(x + y) { rgb("aaa") })

#table(
  columns: (1fr,) * 3,
  stroke: 2pt + rgb("333"),
  [A], [B], [C], [], [], [D \ E \ F \ \ \ G], [H],
)
