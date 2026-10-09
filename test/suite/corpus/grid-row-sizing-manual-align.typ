// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case grid-row-sizing-manual-align.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 3cm, margin: 0pt)
#grid(
  columns: (1fr,),
  rows: (1fr, auto, 2fr),
  [],
  align(center)[A bit more to the top],
  [],
)
