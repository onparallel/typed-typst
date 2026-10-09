// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case grid-same-row-multiple-columns-breaking.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test two columns in the same row overflowing by a different amount.
#set page(width: 5cm, height: 2cm)
#grid(
  columns: 3 * (1fr,),
  row-gutter: 8pt,
  column-gutter: (0pt, 10%),
  [A], [B], [C],
  [Ha!\ ] * 6,
  [rofl],
  [\ A] * 3,
  [hello],
  [darkness],
  [my old]
)
