// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case grid-column-sizing-auto-base.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that auto and relative columns use the correct base.
#grid(
  columns: (auto, 60%),
  rows: (auto, auto),
  rect(width: 50%, height: 0.5cm, fill: conifer),
  rect(width: 100%, height: 0.5cm, fill: eastern),
  rect(width: 50%, height: 0.5cm, fill: forest),
)
