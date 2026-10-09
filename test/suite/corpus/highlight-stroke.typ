// Typst 0.15.1 test suite: tests/suite/text/deco.typ, case highlight-stroke.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test highlight stroke
#highlight(stroke: 2pt + blue)[abc]
#highlight(stroke: (top: blue, left: red, bottom: green, right: orange))[abc]
#highlight(stroke: 1pt, radius: 3pt)[#lorem(5)]
