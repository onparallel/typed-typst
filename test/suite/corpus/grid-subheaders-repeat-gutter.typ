// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-repeat-gutter.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Gutter below the header is also repeated
#set page(height: 8em)
#grid(
  inset: (bottom: 0.5pt),
  stroke: (bottom: 1pt),
  gutter: (1pt, 6pt, 1pt),
  grid.header([a]),
  grid.header(level: 2, [b]),
  ..([c],) * 10,
)
