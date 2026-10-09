// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-twocolumn-queued.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt, columns: 2)
#set place(float: true, scope: "parent", clearance: 10pt)
#let t(align, fill) = place(top + align, rect(fill: fill, height: 25pt))

#t(left, aqua)
#t(center, forest)
#t(right, conifer)
#lines(7)
