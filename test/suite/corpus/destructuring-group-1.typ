// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-group-1, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// This wasn't allowed.
#let ((x)) = 1
#test(x, 1)
