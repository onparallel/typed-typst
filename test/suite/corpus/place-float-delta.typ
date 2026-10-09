// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-delta.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#place(top + center, float: true, dx: 10pt, rect[I])
A
#place(bottom + center, float: true, dx: -10pt, rect[II])
