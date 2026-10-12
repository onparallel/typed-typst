// Typst 0.15.1 test suite: tests/suite/visualize/line.typ, case line-stroke-set.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Set rules with stroke
#set line(stroke: (paint: red, thickness: 1pt, cap: "butt", dash: "dash-dotted"))
#line(length: 60pt)
#v(3pt)
#line(length: 60pt, stroke: blue)
#v(3pt)
#line(length: 60pt, stroke: (dash: none))
