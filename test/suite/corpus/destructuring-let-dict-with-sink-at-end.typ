// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-let-dict-with-sink-at-end, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Destructuring with a sink.
#let (a: _, ..b) = (a: 1, b: 2, c: 3)
#test(b, (b: 2, c: 3))
