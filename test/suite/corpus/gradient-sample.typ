// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-sample, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(gradient.linear(red, green, blue, space: rgb).sample(0%), red)
#test(gradient.linear(red, green, blue, space: rgb).sample(25%), rgb("#97873b"))
#test(gradient.linear(red, green, blue, space: rgb).sample(50%), green)
#test(gradient.linear(red, green, blue, space: rgb).sample(75%), rgb("#17a08c"))
#test(gradient.linear(red, green, blue, space: rgb).sample(100%), blue)
