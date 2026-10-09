// Typst 0.15.1 test suite: tests/suite/layout/line-numbers.typ, case line-numbers-nested-content.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: (left: 1.5cm))
#set par.line(numbering: "1", number-clearance: 0.5cm)

#grid(
  columns: (1fr, 1fr),
  column-gutter: 0.5cm,
  inset: 5pt,
  block[A\ #box(lorem(5))], [Roses\ are\ red],
  [AAA], [],
  [], block[BBB\ CCC],
)
