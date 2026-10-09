// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case grid-breaking-expand-vertically.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that broken cell expands vertically.
#set page(height: 2.25cm)
#grid(
  columns: 2,
  gutter: 10pt,
  align(bottom)[A],
  [
    Top
    #align(bottom)[
      Bottom \
      Bottom

      Top
    ]
  ],
  align(top)[B],
)
