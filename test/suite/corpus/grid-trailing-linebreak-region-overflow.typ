// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case grid-trailing-linebreak-region-overflow.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that trailing linebreak doesn't overflow the region.
#set page(height: 2cm)
#grid[
  Hello \
  Hello \
  Hello \

  World
]
