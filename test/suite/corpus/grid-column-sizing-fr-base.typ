// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case grid-column-sizing-fr-base.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that fr columns use the correct base.
#grid(
  columns: (1fr,) * 4,
  rows: (1cm,),
  rect(width: 50%, fill: conifer),
  rect(width: 50%, fill: forest),
  rect(width: 50%, fill: conifer),
  rect(width: 50%, fill: forest),
)
