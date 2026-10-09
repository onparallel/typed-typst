// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-conic-text.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 200pt, height: auto, margin: 10pt)
#set par(justify: true)
#set text(fill: gradient.conic(red, blue, angle: 45deg))
#lorem(30)
