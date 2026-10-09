// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-twocolumn-fits.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt, columns: 2)
#set place(float: true, clearance: 10pt)
#set rect(width: 70%)

#lines(6)
#place(auto, scope: "parent", rect[I])
#lines(12, "1")
