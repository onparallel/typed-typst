// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-let-array-single-item, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let (a,) = (1,)
#test(a, 1)
