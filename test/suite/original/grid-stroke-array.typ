// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case grid-stroke-array.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test per-column stroke array
#let t = table(
  columns: 3,
  stroke: (red, blue, green),
  [a], [b], [c],
  [d], [e], [f],
  [h], [i], [j],
)
#t
#set text(dir: rtl)
#t
