// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-bad-duplicate, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Here, `a` is not duplicate, where it was previously identified as one.
#let f((a: b), (c,), a) = (a, b, c)
#test(f((a: 1), (2,), 3), (3, 1, 2))
