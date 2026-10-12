// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-let-array-with-sink-at-end-empty, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Destructuring with an empty sink.
#let (a, b, ..c) = (1, 2)
#test(a, 1)
#test(b, 2)
#test(c, ())
