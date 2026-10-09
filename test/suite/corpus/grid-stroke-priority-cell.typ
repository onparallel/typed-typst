// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case grid-stroke-priority-cell.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure cell stroke overrides always appear on top.
#table(
  columns: 2,
  stroke: black,
  table.cell(stroke: red)[a], [b],
  [c], [d],
)

#table(
  columns: 2,
  table.cell(stroke: red)[a], [b],
  [c], [d],
)
