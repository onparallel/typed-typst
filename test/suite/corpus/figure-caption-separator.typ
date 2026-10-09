// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case figure-caption-separator.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test custom separator for figure caption
#set figure.caption(separator: [ --- ])

#figure(
  table(columns: 2)[a][b],
  caption: [The table with custom separator.],
)
