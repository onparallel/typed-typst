// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-let-nested, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Nested destructuring.
#let ((a, b), (key: c)) = ((1, 2), (key: 3))
#test((a, b, c), (1, 2, 3))
