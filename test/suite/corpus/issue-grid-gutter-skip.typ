// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case issue-grid-gutter-skip.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure gutter rows at the top or bottom of a region are skipped.
#set page(height: 10em)

#table(
  row-gutter: 1.5em,
  inset: 0pt,
  rows: (1fr, auto),
  [a],
  [],
  [],
  [f],
  [e\ e],
  [],
  [a]
)
