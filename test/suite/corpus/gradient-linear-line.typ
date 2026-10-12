// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-linear-line.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test gradient on lines
#set page(width: 100pt, height: 100pt)
#line(length: 100%, stroke: 1pt + gradient.linear(red, blue))
#line(length: 100%, angle: 10deg, stroke: 1pt + gradient.linear(red, blue))
#line(length: 100%, angle: 10deg, stroke: 1pt + gradient.linear(red, blue, relative: "parent"))
