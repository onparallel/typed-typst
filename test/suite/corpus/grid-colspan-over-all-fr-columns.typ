// Typst 0.15.1 test suite: tests/suite/layout/grid/colspan.typ, case grid-colspan-over-all-fr-columns.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Colspan over all fractional columns shouldn't expand auto columns on finite pages
#table(
  columns: (1fr, 1fr, auto),
  [A], [B], [C],
  [D], [E], [F]
)
#table(
  columns: (1fr, 1fr, auto),
  table.cell(colspan: 3, lorem(8)),
  [A], [B], [C],
  [D], [E], [F]
)
