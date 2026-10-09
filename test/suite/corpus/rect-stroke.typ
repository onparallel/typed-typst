// Typst 0.15.1 test suite: tests/suite/visualize/rect.typ, case rect-stroke.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Rectangle strokes
#rect(width: 20pt, height: 20pt, stroke: red)
#v(3pt)
#rect(width: 20pt, height: 20pt, stroke: (rest: red, top: (paint: blue, dash: "dashed")))
#v(3pt)
#rect(width: 20pt, height: 20pt, stroke: (thickness: 5pt, join: "round"))
