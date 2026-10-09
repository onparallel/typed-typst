// Typst 0.15.1 test suite: tests/suite/visualize/square.typ, case square-height-limited-stack.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test square that is limited by region size.
#set page(width: 20pt, height: 10pt, margin: 0pt)
#stack(dir: ltr, square(fill: forest), square(fill: conifer))
