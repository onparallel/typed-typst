// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-block-full-height.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Block below shouldn't expand to the end of the page, but stay within its
// rows' boundaries.
#set page(height: 9em)
#table(
  rows: (1em, 1em, 1fr, 1fr, auto),
  table.cell(rowspan: 2, block(width: 2em, height: 100%, fill: red)),
  table.cell(rowspan: 2, block(width: 2em, height: 100%, fill: red)),
  [a]
)
