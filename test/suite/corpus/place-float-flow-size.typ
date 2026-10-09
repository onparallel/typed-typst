// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-flow-size.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto, height: auto)
#set place(float: true, clearance: 5pt)

#place(bottom, rect(width: 80pt, height: 10pt))
#place(top + center, rect(height: 20pt))
#align(center)[A]
#pagebreak()
#align(center)[B]
#place(bottom, scope: "parent", rect(height: 10pt))
