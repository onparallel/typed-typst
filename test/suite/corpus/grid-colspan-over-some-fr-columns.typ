// Typst 0.15.1 test suite: tests/suite/layout/grid/colspan.typ, case grid-colspan-over-some-fr-columns.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Colspan over only some fractional columns will not trigger the heuristic, and
// the auto column will expand more than it should. The table looks off, as a result.
#table(
  columns: (1fr, 1fr, auto),
  [], table.cell(colspan: 2, lorem(8)),
  [A], [B], [C],
  [D], [E], [F]
)
