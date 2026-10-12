// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-assign-nested, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test nested destructuring assignment.
#let a
#let b
#let c
#(((a, b), (key: c)) = ((1, 2), (key: 3)))
#test((a, b, c), (1, 2, 3))
