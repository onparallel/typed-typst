// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-align-array.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test alignment with array.
#table(
  columns: (1fr, 1fr, 1fr),
  align: (left, center, right),
  [A], [B], [C]
)

// Test empty array.
#set align(center)
#table(
  columns: (1fr, 1fr, 1fr),
  align: (),
  [A], [B], [C]
)
