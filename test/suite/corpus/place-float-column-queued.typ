// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-column-queued.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt, columns: 2)
#set place(float: true, clearance: 10pt)
#set rect(width: 75%)
#set text(costs: (widow: 0%, orphan: 0%))

#lines(3)

#place(top, rect[I])
#place(top, rect[II])
#place(bottom, rect[III])

#lines(3)
