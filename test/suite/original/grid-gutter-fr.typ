// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case grid-gutter-fr.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set rect(inset: 0pt)
#grid(
  columns: (auto, auto, 40%),
  column-gutter: 1fr,
  row-gutter: 1fr,
  rect(fill: eastern)[dddaa aaa aaa],
  rect(fill: conifer)[ccc],
  rect(fill: rgb("dddddd"))[aaa],
)
