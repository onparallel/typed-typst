// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case grid-column-sizing-mixed-base.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that all three kinds of rows use the correct bases.
#set page(height: 4cm, margin: 0cm)
#grid(
  rows: (1cm, 1fr, 1fr, auto),
  rect(height: 50%, width: 100%, fill: conifer),
  rect(height: 50%, width: 100%, fill: forest),
  rect(height: 50%, width: 100%, fill: conifer),
  rect(height: 25%, width: 100%, fill: forest),
)
