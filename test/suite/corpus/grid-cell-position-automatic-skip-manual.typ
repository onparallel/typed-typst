// Typst 0.15.1 test suite: tests/suite/layout/grid/positioning.typ, case grid-cell-position-automatic-skip-manual.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Automatic position cell skips custom position cell
#grid(
  grid.cell(x: 0, y: 0)[This shall not error],
  [A]
)
