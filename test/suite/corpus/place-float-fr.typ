// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-fr.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 120pt, columns: 2)
#set place(float: true, clearance: 10pt)
#set rect(width: 70%)

#place(top + center, rect[I])
#place(bottom + center, scope: "parent", rect[II])

A
#v(1fr)
B
#colbreak()
C
#align(bottom)[D]
