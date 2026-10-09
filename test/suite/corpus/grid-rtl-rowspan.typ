// Typst 0.15.1 test suite: tests/suite/layout/grid/rtl.typ, case grid-rtl-rowspan.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 10em)
#set text(dir: rtl)
#table(
  columns: 2,
  rows: (auto, auto, 3em),
  row-gutter: 1em,
  fill: red,
  [a], table.cell(rowspan: 3, block(width: 50%, height: 10em, fill: orange) + place(bottom)[*ZD*]),
  [e],
  [f]
)
