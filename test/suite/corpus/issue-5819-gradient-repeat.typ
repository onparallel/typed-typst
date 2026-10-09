// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case issue-5819-gradient-repeat, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure the gradient constructor generates monotonic stops which can be fed
// back into the gradient constructor itself.
#let my-gradient = gradient.linear(red, blue).repeat(5)
#let _ = gradient.linear(..my-gradient.stops())
#let my-gradient2 = gradient.linear(red, blue).repeat(5, mirror: true)
#let _ = gradient.linear(..my-gradient2.stops())
