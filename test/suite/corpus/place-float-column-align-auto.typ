// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-column-align-auto.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 150pt, columns: 2)
#set place(auto, float: true, clearance: 10pt)
#set rect(width: 75%)

#place(rect[I])
#place(rect[II])
#place(rect[III])
#place(rect[IV])

#lines(6)

#place(rect[V])
#place(rect[VI])
