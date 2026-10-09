// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-let-array, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Simple destructuring.
#let (a, b) = (1, 2)
#test(a, 1)
#test(b, 2)
