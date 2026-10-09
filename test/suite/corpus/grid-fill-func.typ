// Typst 0.15.1 test suite: tests/suite/layout/grid/styling.typ, case grid-fill-func.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 70pt)
#set grid(fill: (x, y) => if calc.even(x + y) { rgb("aaa") })

#grid(
  columns: (1fr,) * 3,
  stroke: 2pt + rgb("333"),
  [A], [B], [C], [], [], [D \ E \ F \ \ \ G], [H],
)
