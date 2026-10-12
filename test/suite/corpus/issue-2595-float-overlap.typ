// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case issue-2595-float-overlap.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 80pt)

1
#place(auto, float: true, block(height: 100%, width: 100%, fill: aqua))
#place(auto, float: true, block(height: 100%, width: 100%, fill: red))
#lines(7)
