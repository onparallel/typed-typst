// Typst 0.15.1 test suite: tests/suite/layout/hide.typ, case hide-rect.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set rect(
  inset: 8pt,
  fill: rgb("e4e5ea"),
  width: 100%,
)

Hidden:
#hide[
#grid(
  columns: (1fr, 1fr, 2fr),
  rows: (auto, 40pt),
  gutter: 3pt,
  rect[A],
  rect[B],
  rect[C],
  rect(height: 100%)[D],
)
]
#grid(
  columns: (1fr, 1fr, 2fr),
  rows: (auto, 40pt),
  gutter: 3pt,
  rect[A],
  rect[B],
  rect[C],
  rect(height: 100%)[D],
)
