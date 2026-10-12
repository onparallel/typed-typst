// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-group-2, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// This also wasn't allowed.
#let ((a, b)) = (1, 2)
#test(a, 1)
#test(b, 2)
