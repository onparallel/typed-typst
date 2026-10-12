// Typst 0.15.1 test suite: tests/suite/layout/line-numbers.typ, case line-numbers-deduplication.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: (left: 1.5cm))
#set par.line(numbering: "1", number-clearance: 0.5cm)

#grid(
  columns: (1fr, 1fr),
  column-gutter: 0.5cm,
  row-gutter: 5pt,
  lorem(5), [A\ B\ C],
  [DDD], [DDD],
  [This is], move(dy: 2pt)[tough]
)
