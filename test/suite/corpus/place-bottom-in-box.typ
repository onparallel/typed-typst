// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-bottom-in-box.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#box(
  fill: aqua,
  width: 30pt,
  height: 30pt,
  place(bottom,
    place(line(start: (0pt, 0pt), end: (20pt, 0pt), stroke: red + 3pt))
  )
)
