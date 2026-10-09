// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-align-auto.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 140pt)
#set place(auto, float: true, clearance: 5pt)

#place(rect[A])
#place(rect[B])
1 \ 2
#place(rect[C])
#place(rect[D])
