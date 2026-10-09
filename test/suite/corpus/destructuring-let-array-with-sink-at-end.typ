// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-let-array-with-sink-at-end, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Destructuring with a sink.
#let (a, b, ..c) = (1, 2, 3, 4, 5, 6)
#test(a, 1)
#test(b, 2)
#test(c, (3, 4, 5, 6))
