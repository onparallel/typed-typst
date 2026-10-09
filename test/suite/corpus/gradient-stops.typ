// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-stops, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(gradient.linear(red, green, blue, space: rgb).stops(), ((red, 0%), (green, 50%), (blue, 100%)))
