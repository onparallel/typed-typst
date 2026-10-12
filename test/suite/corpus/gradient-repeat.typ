// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-repeat, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(
  gradient.linear(red, green, blue, space: rgb).repeat(2).stops(),
  ((red, 0%), (green, 25%), (blue, 50%), (red, 50%), (green, 75%), (blue, 100%))
)
#test(
  gradient.linear(red, green, blue, space: rgb).repeat(2, mirror: true).stops(),
  ((red, 0%), (green, 25%), (blue, 50%), (green, 75%), (red, 100%))
)
