// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-let-dict-with-sink-in-middle, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Destructuring with a sink in the middle.
#let (a: _, ..b, c: _) = (a: 1, b: 2, c: 3)
#test(b, (b: 2))
