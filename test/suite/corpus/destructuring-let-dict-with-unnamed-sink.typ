// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-let-dict-with-unnamed-sink, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Destructuring with unnamed sink.
#let (a, ..) = (a: 1, b: 2)
#test(a, 1)
