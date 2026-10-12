// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case issue-grid-base-auto-row.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that grid base for auto rows makes sense.
#set page(height: 150pt)
#table(
  columns: (1.5cm, auto),
  rows: (auto, auto),
  rect(width: 100%, fill: red),
  rect(width: 100%, fill: blue),
  rect(width: 100%, height: 50%, fill: green),
)
