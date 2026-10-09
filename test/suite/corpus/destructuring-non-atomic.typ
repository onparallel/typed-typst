// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-non-atomic, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that we can't have non-atomic destructuring.
#let x = 1
#let c = [#() = ()]
#test(c.children.last(), [()])
