// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-horizon-in-boxes.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#box(
  fill: aqua,
  width: 30pt,
  height: 30pt,
  {
    box(fill: yellow, {
      [Hello]
      place(horizon, line(start: (0pt, 0pt), end: (20pt, 0pt), stroke: red + 2pt))
    })
    place(horizon, line(start: (0pt, 0pt), end: (20pt, 0pt), stroke: green + 3pt))
  }
)
