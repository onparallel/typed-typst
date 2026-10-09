// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-flow-around.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 80pt)
#set place(float: true)
#place(bottom + center, rect(height: 20pt))
#lines(4)
