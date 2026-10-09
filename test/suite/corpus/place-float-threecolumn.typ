// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-threecolumn.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt, columns: 3)
#set place(float: true, clearance: 10pt)
#set rect(width: 70%)

#place(bottom + center, scope: "parent", rect[I])
#lines(21)
#place(top + center, scope: "parent", rect[II])
