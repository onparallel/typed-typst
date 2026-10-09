// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case issue-grid-skip.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Grid now skips a remaining region when one of the cells
// doesn't fit into it at all.
#set page(height: 100pt)
#grid(
  columns: (2cm, auto),
  rows: (auto, auto),
  rect(width: 100%, fill: red),
  rect(width: 100%, fill: blue),
  rect(width: 100%, height: 80%, fill: green),
  [hello \ darkness #parbreak() my \ old \ friend \ I],
  rect(width: 100%, height: 20%, fill: blue),
  polygon(fill: red, (0%, 0%), (100%, 0%), (100%, 20%))
)
