// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-skew-origin.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test setting skewing origin.
#set page(width: 100pt, height:40pt)
#set text(spacing: 20pt)
#let square = square.with(width: 8pt)
#let skew-square(origin) = box(place(square(stroke: gray))
  + place(skew(ax: -30deg, ay: -30deg, origin: origin, square())))
#skew-square(center+horizon)
#skew-square(bottom+left)
#skew-square(top+right)
#skew-square(horizon+right)
